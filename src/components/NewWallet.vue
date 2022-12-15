<template>
  <div class="h-full flex flex-col justify-between mx-3 py-3">
    <section>
      <p>
        This is your new wallet! Write down your wallet name and wallet key on a
        piece of paper (don't store it digitally)
      </p>

      <div class="text-xl">
        <p class="font-bold mt-3">Wallet name</p>
        <p>{{ currentWallet.wallet_name }}</p>

        <p class="font-bold mt-3">Wallet key</p>
        <p>{{ currentWallet.wallet_key }}</p>
      </div>
    </section>

    <section>
      <div class="mb-1">
        <input
          type="checkbox"
          v-model="acceptedConditions"
          id="acceptConditions"
          name="acceptConditionsCheckbox"
          class="mr-1"
        />
        <label for="acceptConditions"
          >I have written down my wallet name and wallet key on a piece of paper
          and I understand that if I lose my wallet key I lose all funds
          belonging to that wallet key</label
        >
      </div>

      <button
        class="btn-primary w-full disabled:opacity-50"
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
