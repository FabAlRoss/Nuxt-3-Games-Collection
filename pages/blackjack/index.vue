<template>
  <section
    class="flex items-end justify-center pb-20 h-screen w-screen bg-blackjack-bg bg-no-repeat bg-cover"
  >
    <div class="flex flex-col items-center gap-y-4">
      <NuxtLink to="/blackjack/game/">
        <div class="font-prism text-3xl text-white hover:font-outline-yellow">
          Start Game
        </div>
      </NuxtLink>
      <NuxtLink to="/blackjack/rules/">
        <div class="font-prism text-3xl text-white hover:font-outline-yellow">
          Rules
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <div
          class="w-fit mt-6 font-prism text-center text-xl text-white hover:font-outline-yellow"
        >
          Back
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Games Collection | Black Jack",
});
</script>
