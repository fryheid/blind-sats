<template>
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
</template>

<script setup lang="ts">
defineProps(["wallets"]);
</script>
