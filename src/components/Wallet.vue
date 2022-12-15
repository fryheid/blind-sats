<template>
  <div class="h-full mx-3 pt-3 relative">
    <section class="flex md:mt-8">
      <Avatar :wallet-name="wallet.wallet_name" />
      <div class="ml-2">
        <h2 class="text-3xl font-black">{{ wallet.wallet_name }}</h2>
        <p class="text-lg">{{ wallet.initial_balance }} sats</p>
      </div>
    </section>

    <div class="columns-1 md:columns-2 w-full mt-5">
      <fieldset class="border-2 border-light-blue rounded pb-3 px-1">
        <legend>
          <h3 class="text-light-blue text-xl font-bold px-2">Lightning ⚡</h3>
        </legend>
        <div class="flex justify-between mx-2">
          <button
            type="button"
            @click="modals.lightning.receive = true"
            class="btn-primary"
          >
            Receive
          </button>
          <button
            type="button"
            @click="modals.lightning.send = true"
            class="btn-primary"
          >
            Send
          </button>
        </div>
      </fieldset>

      <fieldset class="border-2 border-orange rounded pb-3 px-1 mt-5">
        <legend>
          <h3 class="text-orange text-xl font-bold px-2">eCash 💵</h3>
        </legend>
        <div class="flex justify-between mx-2">
          <button
            type="button"
            @click="modals.ecash.receive = true"
            class="btn-primary bg-orange"
          >
            Receive
          </button>
          <button
            type="button"
            @click="$emit('setView', View.eCash)"
            class="btn-primary bg-orange"
          >
            Send
          </button>
        </div>
      </fieldset>
    </div>

    <tailwind-modal v-model="modals.lightning.receive">
      <qrcode-vue
        :value="wallet.lightning_address"
        :size="200"
        level="L"
        background="#fff7e9"
        foreground="#1746a2"
        class="mt-4"
      />
      <p class="text-lg">{{ wallet.lightning_address }}</p>
    </tailwind-modal>

    <tailwind-modal v-model="modals.lightning.send">
      <form @submit.prevent="" class="flex flex-col">
        <label for="lightning_address" class="font-bold"
          >Lightning address ⚡</label
        >
        <input
          type="email"
          id="lightning_address"
          name="Lightning address"
          class="border-[1px] border-brown rounded p-2"
          required
        />

        <label for="amount" class="font-bold mt-3">Amount (in sats)</label>
        <input
          type="number"
          id="amount"
          name="Amount (in sats)"
          class="border-[1px] border-brown rounded p-2"
          required
          min="1"
        />

        <button
          type="button"
          class="btn-primary mt-5"
        >
          Send sats
        </button>
      </form>
    </tailwind-modal>

    <tailwind-modal v-model="modals.ecash.receive" :orange="true">
      <form @submit.prevent="" class="flex flex-col">
        <label for="lightning_address" class="text-orange font-bold"
          >eCash value</label
        >
        <textarea
          type="text"
          id="lightning_address"
          name="Lightning address"
          class="border-[1px] border-brown rounded p-2"
          rows="8"
        ></textarea>

        <button type="button" class="btn-primary w-full bg-orange mt-5">
          Claim
        </button>
      </form>
    </tailwind-modal>

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
import { ref } from "vue";
import { View } from "../enum/view";
import Avatar from "./Avatar.vue";
import TailwindModal from "./TailwindModal.vue";
import QrcodeVue from "qrcode.vue";

defineProps(["wallet"]);
defineEmits(["setView"]);

const modals = ref({
  lightning: {
    receive: false,
    send: false,
  },
  ecash: {
    receive: false,
  },
});

function walletBalance(wallet_key: string) {
  return 0;
}
</script>
