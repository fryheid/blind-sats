<template>
  <div
    class="h-full flex flex-col items-center justify-center relative mx-3 pt-3"
  >
    <button
      type="button"
      @click="$emit('createNewWallet')"
      class="btn w-full md:w-1/2"
    >
      Create a new wallet
    </button>
    <button
      type="button"
      @click="$emit('setView', View.RestoreWallet)"
      class="text-light-blue dark:text-boy-blue underline mt-3"
    >
      Or import an already existing wallet
    </button>

    <BackButton @set-view="$emit('setView', View.Home)" />
  </div>
</template>

<script setup lang="ts">
import { View } from "../enum/view";
import BackButton from "./BackButton.vue";

defineEmits(["setView", "createNewWallet"]);
</script>
