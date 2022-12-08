<template>
  <ul class="list-unstyled">
    <li
      v-for="wallet in wallets"
      :key="wallet.wallet_name"
      class="flex justify-between border-b-[1px] border-brown p-3"
    >
      <img
        class="rounded-full h-[60px] min-w-[60px] border-[1px] border-brown"
        :src="`https://asats.io/anonsats/robohash/${wallet.wallet_name}`"
      />
      <div class="flex flex-col items-end">
        <h2>{{ wallet.wallet_name }}</h2>
        <p>{{ wallet.initial_balance }} sats</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps(["wallets"]);
</script>
