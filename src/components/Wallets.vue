<template>
  <ul class="list-unstyled">
    <li
      v-for="wallet in wallets"
      :key="wallet.wallet_name"
      @click="$emit('openWallet', wallet)"
      class="border-b-[1px] border-brown"
    >
      <button type="button" class="w-full flex justify-between p-3">
        <img
          class="rounded-full h-[60px] min-w-[60px] border-2 border-light-blue"
          :src="`https://asats.io/anonsats/robohash/${wallet.wallet_name}`"
        />
        <div class="flex flex-col items-end">
          <h2 class="text-lg font-bold">{{ wallet.wallet_name }}</h2>
          <p>{{ wallet.initial_balance }} sats</p>
        </div>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps(["wallets"]);
defineEmits(["openWallet"]);
</script>
