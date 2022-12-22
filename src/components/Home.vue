<template>
  <div v-if="!wallets.length" class="pt-5 mx-3">
    <div class="w-full flex flex-col items-center">
      <p>You don't have a wallet yet. Let's start by adding one.</p>
      <button
        @click="$emit('setView', View.AddWallet)"
        class="btn bg-orange border-orange dark:bg-harvest-gold dark:border-harvest-gold w-full md:w-1/2 flex justify-center items-baseline mt-3"
      >
        <PlusIcon class="w-8 pr-2 stroke-lace/90" />
        Add wallet
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
import PlusIcon from "./PlusIcon.vue";
import Wallets from "./Wallets.vue";

defineProps(["wallets"]);
defineEmits(["setView", "openWallet"]);
</script>
