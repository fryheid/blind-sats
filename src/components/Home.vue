<template>
  <div v-if="!wallets.length" class="pt-5 mx-3">
    <div class="w-full flex flex-col items-center">
      <p>You don't have a wallet yet. Let's start by adding one.</p>
      <button
        @click="$emit('setView', View.AddWallet)"
        class="btn bg-orange border-orange dark:bg-harvest-gold dark:border-harvest-gold w-full md:w-1/2 flex justify-center items-baseline mt-3"
      >
        <svg
          class="w-8 pr-2 stroke-lace/90"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="8"
            y1="1"
            x2="8"
            y2="15"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="15"
            y1="8"
            x2="1"
            y2="8"
            stroke-width="2"
            stroke-linecap="round"
          /></svg
        >Add wallet
      </button>
    </div>
  </div>
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
defineEmits(["setView", "openWallet"]);
</script>
