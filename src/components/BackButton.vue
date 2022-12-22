<template>
  <button
    @click="$emit('setView')"
    type="button"
    class="absolute bottom-3 left-0 md:top-5 md:bottom-full"
  >
    ← back
  </button>
</template>

<script setup lang="ts">
defineEmits(["setView"]);
</script>
