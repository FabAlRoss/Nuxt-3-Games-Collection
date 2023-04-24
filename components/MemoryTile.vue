<template>
  <div
    v-if="!props.show"
    class="flex items-center p-3 border-4 border-darkDesaturatedBlue bg-black rounded-xl w-40 h-40"
    @click="$emit('click')"
  >
    <nuxt-img src="/RickMortyCard.jpg" />
  </div>
  <div
    v-if="props.show"
    class="border-4 border-darkDesaturatedBlue rounded-xl w-40 h-40 z-1"
    @click="$emit('click')"
  >
    <nuxt-img :src="props.image" class="z-0" />
  </div>
</template>

<script setup>
defineEmits(["click"]);

const props = defineProps({
  show: { type: Boolean, required: true },
  image: { type: String, required: true },
});
</script>
