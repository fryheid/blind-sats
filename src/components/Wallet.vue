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
      <legend><h3 class="text-light-blue text-xl font-bold px-2">Lightning ⚡</h3></legend>
      <div class="flex justify-between mx-2">
        <button type="button" class="btn-primary">
          Receive
        </button>
        <button type="button" class="btn-primary">
          Send
        </button>
      </div>
    </fieldset>

    <ul class="grid grid-cols-2 text-light-blue text-xl font-bold mt-5">
      <li>
        <button
          type="button"
          @click="tab = Tab.Receive"
          :class="{
            underline: tab === Tab.Receive,
            'opacity-50': tab !== Tab.Receive,
          }"
        >
          Receive
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="tab = Tab.Send"
          :class="{
            underline: tab === Tab.Send,
            'opacity-50': tab !== Tab.Send,
          }"
        >
          Send
        </button>
      </li>
    </ul>

    <section v-if="tab === Tab.Receive" class="mt-4">
      <qrcode-vue :value="wallet.lightning_address" :size="200" level="L" />
      <p class="text-lg">{{ wallet.lightning_address }}</p>
    </section>

    <section v-else class="mt-2">
      <form @submit.prevent="" class="flex flex-col">
        <label for="lightning_address" class="font-bold"
          >Lightning address ⚡</label
        >
        <input
          type="text"
          id="lightning_address"
          name="Lightning address"
          class="border-[1px] border-brown rounded p-2"
        />

        <label for="amount" class="font-bold mt-3">Amount (in sats)</label>
        <input
          type="text"
          id="amount"
          name="Amount (in sats)"
          class="border-[1px] border-brown rounded p-2"
        />
      </form>
      <button
        type="button"
        class="w-full bg-light-blue text-lace text-xl rounded p-3 mt-5"
      >
        Send sats
      </button>
    </section>

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
import QrcodeVue from "qrcode.vue";

defineProps(["wallet"]);
defineEmits(["setView"]);

enum Tab {
  "Receive",
  "Send",
}

const tab = ref(Tab.Receive);

function walletBalance(wallet_key: string) {
  return 0;
}
</script>
