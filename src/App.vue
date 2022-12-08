<template>
  <body
    class="bg-lace h-screen text-dark-blue grid grid-rows-[min-content_1fr]"
  >
    <header class="bg-dark-blue">
      <div class="mx-3">
        <button type="button" @click="view = View.Home">
          <h1 class="text-lace text-3xl font-extralight">Blind sats</h1>
        </button>
      </div>
    </header>
    <main>
      <template v-if="view === View.Home">
        <p v-if="!wallets.length" class="mt-3 mx-3">
          No wallet found. Please create a wallet.
        </p>
        <Wallets v-else :wallets="wallets" />

        <button
          type="button"
          @click="view = View.AddWallet"
          class="bg-orange rounded-full text-lace absolute bottom-[1vh] right-[1vh] px-3 p-3"
        >
          <img src="/plus.svg" />
        </button>
      </template>

      <div
        v-else-if="view === View.AddWallet"
        class="h-full flex flex-col items-center justify-center relative mx-3 mt-3"
      >
        <span @click="view = View.Home" class="absolute top-0 left-0"
          >← back</span
        >
        <button
          type="button"
          @click="createNewWallet"
          class="w-full bg-light-blue text-lace text-xl p-3"
        >
          Create a new wallet
        </button>
        <button class="text-light-blue underline mt-3">
          Or import an already existing wallet
        </button>
      </div>

      <template v-else-if="view === View.NewWallet">
        <NewWallet :current-wallet="currentWallet" />
      </template>
    </main>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { View } from "./enum/view";
import Wallets from "./components/Wallets.vue";
import NewWallet from "./components/NewWallet.vue";

const view = ref(View.Home);

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
</script>
