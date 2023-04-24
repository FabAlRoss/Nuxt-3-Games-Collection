<template>
  <div
    :class="`font-frijole text-${props.textSize} text-teal font-outline-1 hover:drop-shadow-yellow`"
  >
    <button><slot /></button>
  </div>
</template>

<script setup>
const props = defineProps({
  textSize: { type: String, required: true },
});
</script>
