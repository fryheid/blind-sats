<template>
  <div class="h-full mx-3 pt-3 relative">
    <section class="flex">
      <img
        class="rounded-full h-[60px] min-w-[60px] border-[1px] border-brown"
        :src="`https://asats.io/anonsats/robohash/${wallet.wallet_name}`"
      />
      <div class="ml-2">
        <h2 class="text-3xl font-black">{{ wallet.wallet_name }}</h2>
        <p class="text-lg">{{ wallet.initial_balance }} sats</p>
      </div>
    </section>

    <fieldset class="border-2 border-light-blue rounded pb-3 px-1">
      <legend>
        <h3 class="text-light-blue text-xl font-bold px-2">Lightning ⚡</h3>
      </legend>
      <div class="flex justify-between mx-2">
        <button
          type="button"
          @click="modals.receive = true"
          class="btn-primary"
        >
          Receive
        </button>
        <button type="button" @click="modals.send = true" class="btn-primary">
          Send
        </button>
      </div>
    </fieldset>

    <tailwind-modal v-model="modals.receive">
      <qrcode-vue :value="wallet.lightning_address" :size="200" level="L" />
      <p class="text-lg">{{ wallet.lightning_address }}</p>
    </tailwind-modal>

    <tailwind-modal v-model="modals.send">
      <form @submit.prevent="" class="flex flex-col">
        <label for="lightning_address" class="font-bold"
          >Lightning address ⚡</label
        >
        <textarea
          type="text"
          id="lightning_address"
          name="Lightning address"
          class="border-[1px] border-brown rounded p-2"
          rows="8"
        ></textarea>

        <label for="amount" class="font-bold mt-3">Amount (in sats)</label>
        <input
          type="number"
          id="amount"
          name="Amount (in sats)"
          class="border-[1px] border-brown rounded p-2"
        />

        <button
          type="button"
          class="w-full bg-light-blue text-lace text-xl rounded p-3 mt-5"
        >
          Send sats
        </button>
      </form>
    </tailwind-modal>

    <button
      @click="$emit('setView', View.Home)"
      type="button"
      class="absolute bottom-3 left-0"
    >
      ← back
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
import TailwindModal from "./TailwindModal.vue";
import QrcodeVue from "qrcode.vue";

defineProps(["wallet"]);
defineEmits(["setView"]);

const modals = ref({
  receive: false,
  send: false,
});

function walletBalance(wallet_key: string) {
  return 0;
}
</script>
