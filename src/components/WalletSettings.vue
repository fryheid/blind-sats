<template>
  <div class="h-full mx-3 pt-5 md:pt-16 relative">
    <h2 class="text-lg">Settings</h2>

    <div class="md:columns-2">
      <fieldset class="border-2 border-slate-400 rounded py-3 px-1">
        <legend>
          <h3 class="text-slate-400 text-xl font-bold px-2">Account</h3>
        </legend>
        <div class="flex justify-between mx-2">
          <button
            type="button"
            @click="modals.backup = true"
            class="btn !bg-slate-400 !border-slate-400 text-slate-800"
          >
            Backup
          </button>
          <button
            type="button"
            @click="modals.forget = true"
            class="btn-outline text-slate-400 border-slate-400"
          >
            Forget
          </button>
        </div>
      </fieldset>
    </div>

    <tailwind-modal v-model="modals.backup">
      <div class="opacity-80">
        <p>
          Write down your private key on a piece of paper (not online) and store
          it safely. This private key is used to access your funds.
        </p>
        <p class="mt-3">Private key</p>
      </div>
      <p class="font-bold text-2xl">{{ wallet.wallet_key }}</p>
    </tailwind-modal>

    <tailwind-modal v-model="modals.forget">
      <p class="opacity-80">
        Are you sure you want to remove your account information (wallet name &
        private key) from this device?
      </p>
      <div class="flex mt-3 justify-between sm:justify-end">
        <button
          type="button"
          @click="$emit('forgetWallet', wallet.wallet_key)"
          class="btn !bg-red-300 !border-red-300 text-red-700 mr-3"
        >
          Yes, forget
        </button>
        <button
          type="button"
          @click="modals.forget = false"
          class="btn-outline border-slate-400 text-slate-400 dark:bg-oxford-600"
        >
          No, cancel
        </button>
      </div>
    </tailwind-modal>

    <BackButton @set-view="$emit('setView', View.Wallet)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
import BackButton from "./BackButton.vue";
import TailwindModal from "./TailwindModal.vue";

defineProps(["wallet"]);
defineEmits(["setView", "forgetWallet"]);

const modals = ref({
  backup: false,
  forget: false,
});
</script>
