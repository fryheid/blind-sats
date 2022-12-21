<template>
  <ul class="list-unstyled mb-12">
    <li
      v-for="wallet in wallets"
      :key="wallet.wallet_name"
      @click="$emit('openWallet', wallet)"
      class="border-b-[1px] border-brown dark:border-lace"
    >
      <button type="button" class="w-full flex justify-between p-3">
        <Avatar :wallet-name="wallet.wallet_name" />
        <div class="flex flex-col items-end">
          <h2 class="text-lg font-bold">{{ wallet.wallet_name }}</h2>
          <p>{{ wallet.balance }} sats</p>
        </div>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Avatar from "./Avatar.vue";

defineProps(["wallets"]);
defineEmits(["openWallet"]);
</script>
