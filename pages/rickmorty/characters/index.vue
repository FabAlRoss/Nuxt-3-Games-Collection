<template>
  <div class="flex flex-col items-center h-screen bg-rickmorty-bg">
    <h1 class="font-frijole text-3xl text-teal font-outline-1 mt-6 mb-4">
      Characters
    </h1>
    <PerfectScrollBar
      class="flex flex-wrap justify-center max-w-2xl h-5/6 rounded-xl backdrop-opacity-95 bg-white/70"
    >
      <div
        v-for="{ id, name, image } in characters.results"
        :key="id"
        class="m-2"
      >
        <NuxtLink :to="`/rickmorty/characters/${id}`">
          <nuxt-img
            :src="image"
            width="200"
            height="200"
            class="border-2 border-darkDesaturatedBlue rounded-xl"
          />
          <h2 class="font-marker text-l text-teal font-outline-1">
            {{ name }}
          </h2>
          <p class="font-marker text-l text-teal font-outline-1 mb-1">
            Details...
          </p>
          <hr class="border-darkDesaturatedBlue" />
        </NuxtLink>
      </div>
    </PerfectScrollBar>
    <NuxtLink class="mt-3" to="/rickmorty/">
      <RickMortyBtn :text-size="'xl'"> Back </RickMortyBtn>
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "Rick & Morty | Characters",
});

const query = gql`
  query getCharacters {
    characters {
      results {
        name
        image
        status
        id
        species
        location {
          name
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "rickmorty" });
const characters = data.value.characters;
</script>

<style></style>
