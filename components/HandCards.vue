<template>
  <div class="flex flex-col py-8">
    <div class="flex justify-center gap-3">
      <div v-for="(card, index) in cards" :key="index">
        <nuxt-img
          v-if="!end && bank"
          fit="cover"
          src="/cardBack.png"
          width="175"
        />
        <nuxt-img
          v-if="end || !bank"
          fit="cover"
          :src="card.images.png"
          width="175"
          height="100"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bank: { type: Boolean, required: true },
  end: { type: Boolean, required: true },
  cards: { type: Array, required: true },
});
</script>
