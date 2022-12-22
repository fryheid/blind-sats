<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col max-h-full mx-4 p-4 pt-6 rounded bg-lace dark:bg-oxford-600 max-w-[600px]"
  >
    <span class="mr-8 text-2xl font-bold">
      <slot name="title"></slot>
    </span>
    <div class="flex-grow overflow-y-auto">
      <slot :params="params"></slot>
    </div>
    <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
      <svg
        class="rotate-45 dark:stroke-lace"
        :class="[orange ? 'stroke-orange' : 'stroke-dark-blue']"
        width="16"
        height="16"
        viewBox="0 0 16 16"
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
        />
      </svg>
    </button>
  </vue-final-modal>
</template>

<script setup lang="ts">
defineProps(["orange"]);
</script>

<style scoped>
svg {
  height: 16px;
}
</style>
