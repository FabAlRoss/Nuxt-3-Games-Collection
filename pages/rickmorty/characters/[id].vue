<template>
  <div
    class="flex flex-col justify-center items-center h-screen bg-rickmorty-bg"
  >
    <Head>
      <Title>Rick & Morty | {{ name }}</Title>
    </Head>
    <div class="flex rounded-xl p-4 backdrop-opacity-95 bg-white/70">
      <nuxt-img
        :src="image"
        width="500"
        height="500"
        class="border-2 border-darkDesaturatedBlue rounded-xl mr-4"
        :modifiers="grayScaleWhenDead(status)"
      />
      <div class="flex flex-col justify-between py-4">
        <div class="flex flex-col gap-y-4">
          <h2 class="font-marker text-2xl text-teal font-outline-1">
            {{ name }}
          </h2>
          <hr class="border-darkDesaturatedBlue" />
          <p class="font-marker text-l text-teal font-outline-1">
            Status: {{ status }}
          </p>
          <p class="font-marker text-l text-teal font-outline-1">
            Species: {{ species }}
          </p>
          <p class="font-marker text-l text-teal font-outline-1">
            Location: {{ location.name }}
          </p>
        </div>
        <NuxtLink to="/rickmorty/characters/">
          <RickMortyBtn :text-size="'xl'"> Back </RickMortyBtn>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;

const query = gql`
    query getCharacters {
      character(id: "${id}") {
            name
            image
            status
            id
            species
            location {
                name
            }
        }
    }`;

const { data } = await useAsyncQuery({ query, clientId: "rickmorty" });
const { name, image, status, species, location } = data.value.character;

function grayScaleWhenDead(givenStatus) {
  if (givenStatus === "Dead") return { grayscale: true, tint: "#00DC82" };
  return {};
}
</script>

<style></style>
