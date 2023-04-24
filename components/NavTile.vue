<template>
  <div
    :class="`group h-[291px] w-[520px] rounded-lg bg-cover bg-no-repeat bg-center ${props.background}`"
  >
    <NuxtLink :to="props.link">
      <div
        class="invisible flex items-end justify-center h-full rounded-lg group-hover:bg-white/50 group-hover:visible"
      >
        <slot />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: String, required: true },
  background: { type: String, required: true },
});
</script>
