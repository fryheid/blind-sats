<template>
  <div class="h-full mx-3 pt-3 md:pt-11 relative">
    <section class="flex">
      <Avatar :wallet-name="wallet.wallet_name" />
      <div class="ml-2">
        <h2 class="text-3xl font-black">{{ wallet.wallet_name }}</h2>
        <p class="text-lg">{{ wallet.balance }} sats</p>
      </div>
    </section>

    <div class="columns-1 md:columns-2 w-full mt-5">
      <fieldset class="border-2 border-light-blue dark:border-boy-blue rounded pb-3 px-1">
        <legend>
          <h3 class="text-light-blue dark:text-boy-blue text-xl font-bold px-2">Lightning ⚡</h3>
        </legend>
        <div class="flex justify-between mx-2">
          <button
            type="button"
            @click="modals.lightning.receive = true"
            class="btn"
          >
            Receive
          </button>
          <button
            type="button"
            @click="modals.lightning.send = true"
            class="btn"
          >
            Send
          </button>
        </div>
      </fieldset>

      <!-- <fieldset class="border-2 border-orange rounded pb-3 px-1 mt-5">
        <legend>
          <h3 class="text-orange text-xl font-bold px-2">eCash 💵</h3>
        </legend>
        <div class="flex justify-between mx-2">
          <button
            type="button"
            @click="modals.ecash.receive = true"
            class="btn bg-orange"
          >
            Receive
          </button>
          <button
            type="button"
            @click="$emit('setView', View.eCash)"
            class="btn bg-orange"
          >
            Send
          </button>
        </div>
      </fieldset> -->
    </div>

    <tailwind-modal v-model="modals.lightning.receive">
      <qrcode-vue
        :value="wallet.lightning_address"
        :size="200"
        level="L"
        background="#fff7e9"
        :foreground="[darkMode ? '#0F2743' : '#1746a2']"
        class="mt-4 dark:border-8 dark:border-lace dark:rounded"
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
          class="border-[1px] border-brown dark:border-lace dark:bg-oxford-600 rounded p-2 focus-visible:-outline-offset-1 focus-visible:outline-orange dark:focus-visible:outline-harvest-gold"
          required
        />

        <label for="amount" class="font-bold mt-3">Amount (in sats)</label>
        <input
          type="number"
          id="amount"
          name="Amount (in sats)"
          class="border-[1px] border-brown dark:border-lace dark:bg-oxford-600 rounded p-2 focus-visible:-outline-offset-1 focus-visible:outline-orange dark:focus-visible:outline-harvest-gold"
          required
          min="1"
        />

        <button type="submit" class="btn mt-5">Send sats</button>
      </form>
    </tailwind-modal>

    <!-- <tailwind-modal v-model="modals.ecash.receive" :orange="true">
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

        <button type="button" class="btn w-full bg-orange mt-5">
          Claim
        </button>
      </form>
    </tailwind-modal> -->

    <div class="absolute bottom-0 md:top-3 md:bottom-auto w-full flex justify-between mb-3">
      <button
        @click="$emit('setView', View.Home)"
        type="button"
      >
        ← back
      </button>
      <button
        @click="$emit('setView', View.Settings)"
        type="button"
      >
        ⚙️ settings
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
import Avatar from "./Avatar.vue";
import TailwindModal from "./TailwindModal.vue";
import QrcodeVue from "qrcode.vue";

defineProps(["wallet", "darkMode"]);
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
</script>
