<template>
  <div class="flex items-end justify-center pb-20 h-screen bg-rickmorty-bg">
    <div class="flex flex-col items-center">
      <div class="flex gap-x-14 w-fit mb-12">
        <NuxtLink to="/rickmorty/characters/">
          <RickMortyBtn :text-size="'3xl'"> Characters </RickMortyBtn>
        </NuxtLink>
        <NuxtLink to="/rickmorty/memory/">
          <RickMortyBtn :text-size="'3xl'"> Play Memory </RickMortyBtn>
        </NuxtLink>
      </div>
      <NuxtLink to="/">
        <RickMortyBtn class="mt-6" :text-size="'xl'"> Back </RickMortyBtn>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Games Collection | Rick & Morty",
});
</script>
