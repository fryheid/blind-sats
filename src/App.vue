<template>
  <body class="bg-lace h-100vh text-dark-blue">
    <header class="bg-dark-blue">
      <div class="mx-3">
        <h1 class="text-lace">Blind sats</h1>
      </div>
    </header>
    <main>
      <template v-if="view === View.Home">
        <p v-if="!wallets.length" class="mt-3 mx-3">
          No wallet found. Please create a wallet.
        </p>
        <Wallets v-else :wallets="wallets" />

        <div @click="view = View.AddWallet" class="bg-orange round text-lace absolute bottom-1vh right-1vh px-3 py-2">+</div>
      </template>

      <p v-else-if="view === View.AddWallet">Add wallet</p>
    </main>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Wallets from "./components/Wallets.vue";

enum View {
  Home,
  AddWallet,
  Wallet,
}

const view = ref(View.Home);

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
</script>
