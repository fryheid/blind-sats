<template>
  <div class="h-full flex flex-col justify-between mx-3 py-5">
    <section>
      <div class="opacity-80">
        <p>
          This is your new wallet! Write down your private key on a piece of
          paper (don't store it digitally)
        </p>

        <p class="mt-3">Wallet name</p>
        <p class="font-bold">{{ currentWallet.wallet_name }}</p>

        <p class="mt-3">Private key</p>
      </div>
      <p class="font-bold text-4xl">{{ currentWallet.wallet_key }}</p>
    </section>

    <section>
      <div class="mb-1 opacity-80">
        <input
          type="checkbox"
          v-model="acceptedConditions"
          id="acceptConditions"
          name="acceptConditionsCheckbox"
          class="mr-1"
        />
        <label for="acceptConditions"
          >I have written down my private key on a piece of paper and I
          understand that if I lose my private key I lose all funds belonging to
          that private key</label
        >
      </div>

      <button
        class="btn w-full disabled:opacity-50"
        :disabled="!acceptedConditions"
        @click="$emit('setView', View.Wallet)"
      >
        Go to my new wallet
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
defineProps(["currentWallet"]);
defineEmits(["setView"]);

const acceptedConditions = ref();
</script>
