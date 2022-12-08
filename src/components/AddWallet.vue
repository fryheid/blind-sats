<template>
  <div
    class="h-full flex flex-col items-center justify-center relative mx-3 mt-3"
  >
    <span @click="$emit('setView', View.Home)" class="absolute top-0 left-0"
      >← back</span
    >
    <button
      type="button"
      @click="$emit('createNewWallet')"
      class="w-full bg-light-blue text-lace text-xl p-3"
    >
      Create a new wallet
    </button>
    <button class="text-light-blue underline mt-3">
      Or import an already existing wallet
    </button>
  </div>
</template>

<script setup lang="ts">
import { View } from "../enum/view";

defineEmits(["setView"]);
</script>
