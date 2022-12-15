<template>
  <p v-if="!wallets.length" class="mt-3 mx-3">
    No wallet found. Please create a wallet.
  </p>
  <Wallets v-else @open-wallet="(wallet) => $emit('openWallet', wallet)" :wallets="wallets" />

  <button
    type="button"
    @click="$emit('setView', View.AddWallet)"
    class="bg-orange rounded-full text-lace sticky float-right bottom-3 right-3 p-5 hover:brightness-95 active:brightness-90"
  >
    <img src="/plus.svg" />
  </button>
</template>

<script setup lang="ts">
import { View } from "../enum/view";
import Wallets from "./Wallets.vue";
defineProps(["wallets"]);
defineEmits(["setView", "openWallet"]);
</script>
