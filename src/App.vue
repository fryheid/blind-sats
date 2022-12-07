<template>
  <body class="bg-lace h-100vh text-dark-blue">
    <header class="bg-dark-blue">
      <div class="mx-3">
        <h1 class="text-lace">Blind sats</h1>
      </div>
    </header>
    <main>
      <ul class="list-unstyled">
        <li
          v-for="wallet in wallets"
          :key="wallet.wallet_name"
          class="flex justify-between border-bottom border-brown p-3"
        >
          <img
            class="round h-60px minw-60px border border-brown"
            :src="`https://asats.io/anonsats/robohash/${wallet.wallet_name}`"
          />
          <div class="flex flex-column align-end">
            <h2>{{ wallet.wallet_name }}</h2>
            <p>{{ wallet.initial_balance }} sats</p>
          </div>
        </li>
      </ul>
    </main>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

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
