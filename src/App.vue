<template>
  <body
    class="flex content-center justify-center bg-lace h-[100dvh] mh-screen text-dark-blue"
  >
    <div
      class="grid grid-rows-[min-content_1fr] container mx-auto my-auto max-w-screen-sm h-full sm:h-[600px] max-h-full shadow-2xl sm:rounded"
    >
      <header class="bg-dark-blue shadow-md sm:rounded-t">
        <div class="mx-3">
          <h1 class="text-lace text-3xl font-extralight">Blind sats</h1>
        </div>
      </header>
      <main class="relative overflow-y-auto">
        <template v-if="view === View.Home">
          <Home
            @set-view="setView"
            @open-wallet="openWallet"
            :wallets="wallets"
          />
        </template>

        <template v-else-if="view === View.AddWallet">
          <AddWallet @set-view="setView" @create-new-wallet="createNewWallet" />
        </template>

        <template v-else-if="view === View.NewWallet">
          <NewWallet @set-view="setView" :current-wallet="currentWallet" />
        </template>

        <template v-else-if="view === View.Wallet">
          <Wallet @set-view="setView" :wallet="currentWallet" />
        </template>

        <template v-else-if="view === View.eCash">
          <eCash @set-view="setView" :wallet="currentWallet" />
        </template>

        <template v-else-if="view === View.Settings">
          <Settings @set-view="setView" :wallet="currentWallet" />
        </template>
      </main>
    </div>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { View } from "./enum/view";
import Home from "./components/Home.vue";
import AddWallet from "./components/AddWallet.vue";
import NewWallet from "./components/NewWallet.vue";
import Wallet from "./components/Wallet.vue";
import eCash from "./components/eCash.vue";
import Settings from "./components/Settings.vue";

const view = ref(View.Home);

function setView(newView: View) {
  view.value = newView;
}

const currentWallet = ref({});

const wallets = ref([
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    balance: 0,
  },
]);

function createNewWallet() {
  let wallet;

  try {
    wallet = walletCreate();
  } catch (e) {
    console.error(e);
    return;
  }

  wallets.value.push(wallet);
  currentWallet.value = wallet;

  view.value = View.NewWallet;
}

function walletCreate() {
  return {
    wallet_key: "test-key",
    wallet_name: "test-wallet3",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  };
}

function openWallet(wallet: Object) {
  currentWallet.value = wallet;
  view.value = View.Wallet;
}
</script>
