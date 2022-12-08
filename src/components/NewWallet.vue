<template>
  <div class="h-full flex flex-col justify-between mx-3 py-3">
    <section>
      <p>
        This is your new wallet! Write down your wallet name and wallet key on a
        piece of paper (don't store it digitally)
      </p>

      <p class="font-bold mt-3">Wallet name</p>
      <p>{{ currentWallet.wallet_name }}</p>

      <p class="font-bold mt-3">Wallet key</p>
      <p>{{ currentWallet.wallet_key }}</p>
    </section>

    <section>
      <div>
        <input type="checkbox" id="accept" name="acceptCheckbox" class="mr-1" />
        <label for="accept"
          >I have written down my wallet name and wallet key on a piece of paper
          and I understand that if I lose my wallet key I lose all funds
          belonging to that wallet key</label
        >
      </div>

      <button class="w-full bg-light-blue text-lace text-xl p-3">
        Go to my new wallet
      </button>
    </section>
  </div>
</template>
