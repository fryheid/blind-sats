<template>
  <ul class="list-unstyled mb-12">
    <li
      v-for="wallet in wallets"
      :key="wallet.wallet_name"
      @click="$emit('openWallet', wallet)"
      class="border-b-[1px] border-brown/50 dark:border-lace/50"
    >
      <button type="button" class="w-full flex justify-between px-3 py-5">
        <Avatar :wallet-name="wallet.wallet_name" />
        <div class="flex flex-col items-end">
          <h2 class="opacity-80">{{ wallet.wallet_name }}</h2>
          <p class="text-lg font-bold">{{ wallet.balance }} sats</p>
        </div>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Avatar from "./Avatar.vue";
import { Wallet } from "../types";

defineProps<{
  wallets: Array<Wallet>
}>();
defineEmits(["openWallet"]);
</script>
