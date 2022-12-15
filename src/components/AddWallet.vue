<template>
  <div
    class="h-full flex flex-col items-center justify-center relative mx-3 pt-3"
  >
    <button
      type="button"
      @click="$emit('createNewWallet')"
      class="btn-primary w-full md:w-1/2"
    >
      Create a new wallet
    </button>
    <button class="text-light-blue underline mt-3">
      Or import an already existing wallet
    </button>
    <button
      @click="$emit('setView', View.Home)"
      type="button"
      class="absolute bottom-3 left-0 md:top-3 md:bottom-full"
    >
      ← back
    </button>
  </div>
</template>

<script setup lang="ts">
import { View } from "../enum/view";

defineEmits(["setView", "createNewWallet"]);
</script>
