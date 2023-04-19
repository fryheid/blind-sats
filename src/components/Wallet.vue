<template>
  <div class="h-full mx-3 pt-5 md:pt-16 relative">
    <section class="flex">
      <Avatar :wallet-name="wallet.wallet_name" />
      <div class="ml-2">
        <h2 class="text-lg opacity-80">{{ wallet.wallet_name }}</h2>
        <div class="flex">
          <p class="text-2xl font-bold">{{ wallet.balance }} sats</p>
          <button
            type="button"
            @click="$emit('checkBalance')"
            class="px-[7px] text-2xl"
            :class="{ 'animate-spin': spinReloadIcon }"
          >
            <Reload />
          </button>
        </div>
      </div>
    </section>

    <div class="columns-1 md:columns-2 w-full mt-5">
      <fieldset class="border-2 border-light-blue dark:border-boy-blue rounded py-3 px-1">
        <legend>
          <h3 class="text-light-blue dark:text-boy-blue text-xl font-bold px-2">
            Lightning ⚡
          </h3>
        </legend>
        <div class="flex justify-between mx-2">
          <button type="button" @click="modals.lightning.receive = true" class="btn">
            Receive
          </button>
          <button type="button" @click="modals.lightning.send = true" class="btn-outline">
            Send
          </button>
        </div>
      </fieldset>

      <!-- <fieldset class="border-2 border-orange rounded py-3 px-1 mt-5">
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
        :foreground="darkMode ? '#0F2743' : '#1746a2'"
        class="mt-4 dark:border-8 dark:border-lace dark:rounded"
      />
      <p class="text-lg">{{ wallet.lightning_address }}</p>
    </tailwind-modal>

    <tailwind-modal v-model="modals.lightning.send" @closed="showCommentInput = false">
      <form @submit.prevent="" class="flex flex-col">
        <label for="lightning_address" class="font-bold">Lightning address ⚡</label>
        <input
          type="email"
          id="lightning_address"
          name="Lightning address"
          class="input"
          required
        />

        <label for="amount" class="font-bold mt-3">Amount (in sats)</label>
        <input
          type="number"
          id="amount"
          name="Amount (in sats)"
          class="input"
          required
          min="1"
        />

        <button
          v-if="!showCommentInput"
          type="button"
          @click="showCommentInput = true"
          class="btn-outline dark:bg-oxford-600 mt-3"
        >
          Add comment
        </button>
        <template v-else>
          <label for="comment" class="mt-3">Comment (optional)</label>
          <textarea
            type="text"
            id="comment"
            name="Comment field"
            class="input"
            style="resize: none"
            rows="3"
          />
        </template>

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

    <div
      class="absolute bottom-0 md:top-5 md:bottom-auto w-full flex justify-between mb-3"
    >
      <BackButton
        @set-view="$emit('setView', View.Home)"
        class="relative bottom-0 md:!top-0"
      />
      <button @click="$emit('setView', View.Settings)" type="button">⚙️ settings</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "../enum/view";
import Avatar from "./Avatar.vue";
import BackButton from "./BackButton.vue";
import TailwindModal from "./TailwindModal.vue";
import Reload from "./icons/Reload.vue";
import QrcodeVue from "qrcode.vue";

defineProps(["wallet", "spinReloadIcon", "darkMode"]);
defineEmits(["setView", "checkBalance"]);

const modals = ref({
  lightning: {
    receive: false,
    send: false,
  },
  ecash: {
    receive: false,
  },
});

const showCommentInput = ref(false);
</script>
