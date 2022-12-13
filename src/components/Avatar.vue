<template>
  <img
    class="rounded-full h-[60px] min-w-[60px] border-2 border-dark-blue"
    :class="{ 'animate-pulse': !loaded }"
    :src="`https://asats.io/anonsats/robohash/${walletName}`"
    @load="loaded = true"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps(["walletName"]);

const loaded = ref(false);
</script>
