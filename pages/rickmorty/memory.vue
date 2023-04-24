<template>
  <section class="flex flex-col items-center h-screen bg-rickmorty-bg">
    <h1 class="font-frijole text-3xl text-teal font-outline-1 mt-6 mb-6">
      Memory
    </h1>
    <div class="flex px-20 w-screen">
      <div class="flex flex-col w-1/4">
        <div class="font-frijole text-2xl text-teal font-outline-1 mt-6">
          Time: {{ elapsedTime }}
        </div>
        <div class="font-frijole text-2xl text-teal font-outline-1 mt-2">
          Moves: {{ moves }}
        </div>
        <div class="mt-4">
          <div
            v-if="
              elapsedMilliSecondes > 0 &&
              !show.success.every((element) => {
                return element;
              })
            "
            class="flex space-x-2"
          >
            <RickMortyBtn
              v-if="timer.instance"
              class="mt-4"
              :text-size="'2xl'"
              @click="stopTimer()"
            >
              Pause
            </RickMortyBtn>
            <RickMortyBtn
              v-if="!timer.instance"
              class="mt-4"
              :text-size="'2xl'"
              @click="startTimer()"
            >
              Resume
            </RickMortyBtn>
            <RickMortyBtn class="mt-4" :text-size="'2xl'" @click="newGame()">
              Stop
            </RickMortyBtn>
          </div>
          <RickMortyBtn class="mt-4" :text-size="'2xl'" @click="newGame()">
            New Game
          </RickMortyBtn>
          <NuxtLink to="/rickmorty/">
            <RickMortyBtn class="mt-4" :text-size="'xl'"> Back </RickMortyBtn>
          </NuxtLink>
        </div>
      </div>
      <div
        class="grid grid-cols-4 gap-4 w-fit p-4 mx-auto rounded-xl backdrop-opacity-95 bg-white/30"
      >
        <div
          v-for="(character, index) in characters.cards"
          :key="index"
          class="shadow-xl"
        >
          <MemoryTile
            :show="show.visible[index]"
            :image="character.image"
            @click="flipCard(index)"
          >
          </MemoryTile>
        </div>
      </div>
      <div class="flex flex-col w-1/4"></div>
    </div>
  </section>
</template>

<script setup>
const { shuffle, getElapsedTime } = rickMortyMemory();

useHead({
  title: "Rick & Morty | Memory",
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

const characters = reactive({ cards: [] });
characters.cards = shuffle(data.value.characters.results).slice(-8);
characters.cards = characters.cards.concat(characters.cards);
characters.cards = shuffle(characters.cards);

const show = reactive({
  visible: new Array(characters.cards.length).fill(false),
  success: new Array(characters.cards.length).fill(false),
});

let openCards = 0;

const moves = ref(0);

const timer = reactive({ instance: null });
const elapsedMilliSecondes = ref(0);
let startTime = -1;

const elapsedTime = computed(() => {
  const time = getElapsedTime(elapsedMilliSecondes.value);
  return time;
});

function startTimer() {
  startTime = Date.now();
  timer.instance = setInterval(() => {
    elapsedMilliSecondes.value += Date.now() - startTime;
    startTime = Date.now();
  }, 100);
}

function stopTimer() {
  clearInterval(timer.instance);
  timer.instance = null;
  startTime = -1;
}

function newGame() {
  let stack = shuffle(data.value.characters.results).slice(-8);
  stack = stack.concat(stack);
  characters.cards = shuffle(stack);

  show.visible = new Array(characters.cards.length).fill(false);
  show.success = new Array(characters.cards.length).fill(false);

  if (timer.instance) stopTimer(timer);
  elapsedMilliSecondes.value = 0;
  moves.value = 0;
}

function flipCard(id) {
  if (!timer.instance) startTimer();

  openCards += 1;

  if (openCards === 2) moves.value += 1;

  if (openCards === 3) {
    show.visible = structuredClone(toRaw(show.success));
    openCards = 1;
  }

  show.visible[id] = true;

  if (openCards === 2) {
    for (let i = 0; i <= show.visible.length; i += 1) {
      if (
        !show.success[i] &&
        show.visible[i] &&
        i !== id &&
        characters.cards[i].id === characters.cards[id].id
      ) {
        show.success[i] = true;
        show.success[id] = true;
      }
    }
  }

  if (
    show.success.every((element) => {
      return element;
    })
  )
    stopTimer();
}
</script>

<style></style>
