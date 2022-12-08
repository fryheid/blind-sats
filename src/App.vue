<template>
  <body
    class="bg-lace h-screen mh-screen text-dark-blue grid grid-rows-[min-content_1fr]"
  >
    <header class="bg-dark-blue container mx-auto max-w-screen-sm">
      <div class="mx-3">
        <h1 class="text-lace text-3xl font-extralight">Blind sats</h1>
      </div>
    </header>
    <main
      class="container mx-auto max-w-screen-sm shadow-2xl relative overflow-y-auto"
    >
      <template v-if="view === View.Home">
        <Home @set-view="setView" @open-wallet="openWallet" :wallets="wallets" />
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
    </main>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { View } from "./enum/view";
import Home from "./components/Home.vue";
import AddWallet from "./components/AddWallet.vue";
import NewWallet from "./components/NewWallet.vue";
import Wallet from "./components/Wallet.vue";

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
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
  },
  {
    wallet_key: "test-key",
    wallet_name: "test-wallet2",
    lightning_address: "test@asats.io",
    initial_balance: 0,
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
