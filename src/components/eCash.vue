<template>
  <div class="h-full mx-3 pt-3 relative">
    <section class="flex md:mt-8">
      <Avatar :wallet-name="wallet.wallet_name" />
      <div class="ml-2">
        <h2 class="text-3xl font-black">{{ wallet.wallet_name }}</h2>
        <p class="text-lg">{{ wallet.initial_balance }} sats</p>
      </div>
    </section>

    <button
      @click="$emit('setView', View.Wallet)"
      type="button"
      class="absolute bottom-3 left-0 md:top-3 md:bottom-full"
    >
      ← back
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
import Avatar from "./Avatar.vue";

defineProps(["wallet"]);
defineEmits(["setView"]);

function walletBalance(wallet_key: string) {
  return 0;
}
</script>
