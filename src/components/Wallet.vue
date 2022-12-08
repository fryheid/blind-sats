<template>
  <div class="h-full mx-3 pt-3 relative">
    <h2 class="text-3xl font-black">{{ wallet.wallet_name }}</h2>
    <p>{{ wallet.initial_balance }} sats</p>

    <h3 class="text-2xl font-bold">Receive</h3>
    <p>{{ wallet.lightning_address }}</p>

    <button type="button" class="bg-light-blue text-lace text-xl p-3">
      Send sats
    </button>

    <button
      @click="$emit('setView', View.Home)"
      type="button"
      class="absolute bottom-3 left-0"
    >
      ← back
    </button>
  </div>
</template>

<script setup lang="ts">
import { View } from "../enum/view";

defineProps(["wallet"]);
defineEmits(["setView"]);

function walletBalance(wallet_key: string) {
  return 0;
}
</script>
