<template>
  <div class="h-full mx-3 pt-5 md:pt-16 relative">
    <form
      @submit.prevent="$emit('restoreWallet', walletKey, walletName)"
      class="flex flex-col"
    >
      <label for="walletKey" class="font-bold">Private key</label>
      <input
        type="text"
        id="walletKey"
        name="Wallet key"
        class="border-[1px] border-brown rounded p-2 text-dark-blue dark:text-oxford-900"
        v-model="walletKey"
        required
      />

      <template v-if="legacyWallet">
        <p class="mt-3">
          You are using a legacy wallet, please also fill in your wallet name to
          restore your funds
        </p>
        <label for="walletName" class="font-bold">Wallet name</label>
        <input
          type="text"
          id="walletName"
          name="Wallet name"
          class="border-[1px] border-brown rounded p-2"
          v-model="walletName"
          required
        />
      </template>

      <button type="submit" class="btn mt-3 disabled:opacity-50" :disabled="restoring">Restore</button>
    </form>

    <BackButton @set-view="$emit('setView', View.AddWallet)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
import BackButton from "./BackButton.vue";

defineProps(["legacyWallet", "restoring"]);
defineEmits(["setView", "restoreWallet"]);

const walletKey = ref("");
const walletName = ref("");
</script>
