<template>
  <div class="relative h-screen w-screen">
    <div class="relative">
      <div class="h-screen w-screen z-0" @click="toggleShow('')">
        <slot />
      </div>
      <div v-if="showImprint" class="relativ w-fit h-fit">
        <span
          class="absolute z-99 top-12 min-w-[50%] left-1/2 transform -translate-x-1/2 text-right text-white material-symbols-outlined"
          @click="toggleShow('Imprint')"
        >
          close
        </span>
        <ImpressumModal
          v-if="showImprint"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99"
        />
      </div>
      <div v-if="showDataSec" class="relativ w-fit h-fit">
        <span
          class="absolute z-99 top-12 min-w-[50%] left-1/2 transform -translate-x-1/2 text-right text-white material-symbols-outlined"
          @click="toggleShow('DataSec')"
        >
          close
        </span>
        <DatenSchutzModal
          v-if="showDataSec"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99"
        />
      </div>
    </div>
    <footer
      class="absolute inset-x-0 bottom-0 flex justify-center gap-4 pb-4 text-white z-99"
    >
      <span class="z-99" @click="toggleShow('Imprint')">Impressum</span>
      <span class="z-99" @click="toggleShow('DataSec')">Datenschutz</span>
    </footer>
  </div>
</template>

<script setup>
const showImprint = ref(false);
const showDataSec = ref(false);

function toggleShow(type) {
  if (type === "") {
    this.showImprint = false;
    this.showDataSec = false;
  }
  if (type === "Imprint") {
    if (this.showDataSec) this.showDataSec = false;
    if (this.showImprint) {
      this.showImprint = false;
    } else {
      this.showImprint = true;
    }
  }
  if (type === "DataSec") {
    if (this.showImprint) this.showImprint = false;
    if (this.showDataSec) {
      this.showDataSec = false;
    } else {
      this.showDataSec = true;
    }
  }
}
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
