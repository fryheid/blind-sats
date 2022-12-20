<template>
  <p v-if="!wallets.length" class="mt-3 mx-3">
    No wallet found. Please create a wallet.
  </p>
  <Wallets
    v-else
    @open-wallet="(wallet) => $emit('openWallet', wallet)"
    :wallets="wallets"
  />
</template>

<script setup lang="ts">
import { View } from "../enum/view";
import Wallets from "./Wallets.vue";
defineProps(["wallets"]);
defineEmits(["openWallet"]);
</script>
