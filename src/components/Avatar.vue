<template>
  <img
    class="rounded-full h-[60px] min-w-[60px] border-2 border-light-blue"
    :src="`https://asats.io/anonsats/robohash/${walletName}`"
  />
</template>

<script setup lang="ts">
defineProps(["walletName"])
</script>