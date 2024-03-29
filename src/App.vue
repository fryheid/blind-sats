<template>
  <div :class="{ dark: darkMode }">
    <div
      class="flex content-center justify-center bg-lace dark:bg-oxford-800 h-[100dvh] mh-screen text-dark-blue dark:text-lace"
    >
      <div
        class="grid grid-rows-[min-content_1fr] container mx-auto my-auto max-w-screen-sm h-full sm:h-[600px] max-h-full shadow-xl shadow-brown/25 dark:shadow-oxford-900/75 sm:rounded relative"
      >
        <header
          class="bg-dark-blue dark:bg-oxford-900 sm:rounded-t shadow-md shadow-brown/25 dark:shadow-oxford-900/25 z-20"
        >
          <div
            class="shadow-[inset_0_2px_0] sm:shadow-lace/50 dark:shadow-lace/25 flex justify-between sm:rounded-t"
          >
            <div class="mx-3">
              <h1 class="text-lace/80 text-2xl font-extralight">Blind sats</h1>
            </div>
            <button
              v-if="darkMode"
              type="button"
              @click="setDarkMode(false)"
              class="w-8 mx-3"
            >
              ☀️
            </button>
            <button v-else type="button" @click="setDarkMode(true)" class="w-8 mx-3">
              🌙
            </button>
          </div>
        </header>
        <main class="relative overflow-y-auto dark:bg-oxford-700 sm:rounded-b">
          <template v-if="view === View.Home">
            <Home @set-view="setView" @open-wallet="openWallet" :wallets="wallets" />
          </template>

          <template v-else-if="view === View.AddWallet">
            <AddWallet @set-view="setView" @create-new-wallet="createNewWallet" />
          </template>

          <template v-else-if="view === View.RestoreWallet">
            <RestoreWallet
              @set-view="setView"
              @restore-wallet="restoreWallet"
              :legacy-wallet="legacyWallet"
              :restoring="restoring"
            />
          </template>

          <template v-else-if="view === View.NewWallet">
            <NewWallet @set-view="setView" :current-wallet="currentWallet" />
          </template>

          <template v-else-if="view === View.Wallet">
            <Wallet
              @set-view="setView"
              @check-balance="checkBalance"
              :wallet="currentWallet"
              :spin-reload-icon="spinReloadIcon"
              :dark-mode="darkMode"
            />
          </template>

          <template v-else-if="view === View.eCash">
            <eCash @set-view="setView" :wallet="currentWallet" />
          </template>

          <template v-else-if="view === View.Settings">
            <WalletSettings
              @set-view="setView"
              @forget-wallet="forgetWallet"
              :wallet="currentWallet"
            />
          </template>
        </main>

        <button
          v-if="view === View.Home"
          type="button"
          @click="setView(View.AddWallet)"
          class="bg-orange dark:bg-harvest-gold rounded-full text-lace absolute bottom-3 right-3 p-5 hover:brightness-95 active:brightness-90"
        >
          <Plus class="stroke-lace/90" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import { Wallet as WalletInterface, WalletInfo } from "./types";
import { View } from "./enum/view";
import Home from "./components/Home.vue";
import AddWallet from "./components/AddWallet.vue";
import RestoreWallet from "./components/RestoreWallet.vue";
import NewWallet from "./components/NewWallet.vue";
import Wallet from "./components/Wallet.vue";
import eCash from "./components/eCash.vue";
import WalletSettings from "./components/WalletSettings.vue";
import Plus from "./components/icons/Plus.vue";

const view = ref(View.Home);
const darkMode = ref(false);

onMounted(() => {
  handleDarkMode();
});

function handleDarkMode() {
  const darkModeSetting = localStorage.getItem("dark-mode");

  if (!darkModeSetting) {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode.value));
    return;
  }

  darkMode.value = JSON.parse(darkModeSetting);
}

function setDarkMode(value: boolean) {
  darkMode.value = value;
  localStorage.setItem("dark-mode", JSON.stringify(darkMode.value));
}

function setView(newView: View) {
  view.value = newView;
}

const currentWallet: Ref<WalletInterface> = ref({
  wallet_key: "",
  wallet_name: "",
  lightning_address: "",
  balance: 0,
});
const legacyWallet = ref(false);

const spinReloadIcon = ref(false);

async function checkBalance() {
  spinReloadIcon.value = true;
  if (currentWallet.value.wallet_key === "") return;

  const { available_balance } = await getWalletInfo(currentWallet.value.wallet_key);
  spinReloadIcon.value = false;

  if (available_balance === null || available_balance === undefined) {
    useToast().error("Wallet was not found");
    return;
  }

  currentWallet.value.balance = available_balance;
  useToast().success("Balance updated");
}

const wallets: Ref<Array<WalletInterface>> = ref([]);

const restoring = ref(false);

async function restoreWallet(wallet_key: string, wallet_name: string) {
  restoring.value = true;
  const walletInfo = await getWalletInfo(wallet_key);

  if (wallet_name) {
    const wallet: WalletInterface = {
      wallet_key,
      wallet_name,
      lightning_address: `${wallet_name}@asats.io`,
      balance: walletInfo.available_balance,
    };

    wallets.value.push(wallet);
    currentWallet.value = wallet;

    view.value = View.Wallet;
    legacyWallet.value = false;
    restoring.value = false;
    return;
  }

  if (walletInfo.wallet_name === "not assigned") {
    legacyWallet.value = true;
    restoring.value = false;
    return;
  }

  const wallet: WalletInterface = {
    wallet_key,
    wallet_name: walletInfo.wallet_name,
    lightning_address: walletInfo.lightning_address,
    balance: walletInfo.available_balance,
  };

  wallets.value.push(wallet);
  currentWallet.value = wallet;

  view.value = View.Wallet;
  restoring.value = false;
}

async function getWalletInfo(wallet_key: string): Promise<WalletInfo> {
  const walletInfo = await fetch("https://asats.io/anonsats/wallet/balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wallet_key }),
  }).then((walletInfo) => walletInfo.json());

  return walletInfo;
}

async function createNewWallet() {
  try {
    const wallet = await walletCreate();

    if (!wallet) {
      return;
    }

    wallets.value.push(wallet);
    currentWallet.value = wallet;

    view.value = View.NewWallet;
  } catch (e) {
    console.error(e);
  }
}

async function walletCreate() {
  try {
    const response = await fetch("https://asats.io/anonsats/wallet/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        use_uuid: false,
        compact: true,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log("ERROR", error));

    if (
      !response.wallet_key &&
      !response.wallet_name &&
      !response.lightning_address &&
      !response.initial_balance
    ) {
      return;
    }

    const wallet: WalletInterface = {
      wallet_key: response.wallet_key,
      wallet_name: response.wallet_name,
      lightning_address: response.lightning_address,
      balance: response.initial_balance,
    };

    return wallet;
  } catch (e) {
    console.error(e);
    useToast().error(
      "Unable to create a new wallet at the moment, please try again later"
    );
  }
}

function openWallet(wallet: WalletInterface) {
  currentWallet.value = wallet;
  view.value = View.Wallet;
}

function forgetWallet(wallet_key: string) {
  wallets.value = wallets.value.filter((wallet) => wallet.wallet_key !== wallet_key);

  view.value = View.Home;
}
</script>
