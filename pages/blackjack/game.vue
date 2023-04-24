<template>
  <section
    class="relative h-screen w-screen bg-blackjack-bg bg-no-repeat bg-cover"
  >
    <div v-if="game.end" class="absolute h-screen w-screen z-98 bg-black/50">
      <div
        v-if="game.end"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99 px-16 py-8 border-solid border-2 border-white rounded-md font-lobster text-l text-white bg-black/50"
      >
        <p class="text-center text-2xl">Bank: {{ bank.score }}</p>
        <p class="mb-4 text-center text-2xl">Player: {{ player.score }}</p>
        <p class="mb-6 font-prism text-center text-3xl font-outline-yellow">
          {{ game.message }}
        </p>
        <div class="flex flex-col gap-y-4">
          <BlackJackBtn @click="newRound()">Continue</BlackJackBtn>
          <NuxtLink to="/blackjack/">
            <BlackJackBtn>Stop</BlackJackBtn>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="deck.data">
      <HandCards :bank="true" :cards="bank.cards" :end="game.end" />

      <div class="flex px-40 justify-between">
        <div
          class="flex flex-col justify-center gap-4 font-lobster text-l text-white"
        >
          <p class="text-3xl">Score: {{ player.score }}</p>
          <BlackJackBtn @click="newGame()">New Game</BlackJackBtn>
          <NuxtLink to="/blackjack/">
            <BlackJackBtn>End Game</BlackJackBtn>
          </NuxtLink>
        </div>

        <div class="flex flex-col font-lobster text-l text-white">
          <BlackJackBtn v-if="deck.data" @click="showCards()"
            >Show Cards</BlackJackBtn
          >
          <nuxt-img class="my-2" fit="cover" src="/cardBack.png" width="175" />
          <BlackJackBtn v-if="deck.data" @click="drawCards(1)"
            >Draw Card</BlackJackBtn
          >
        </div>
      </div>

      <HandCards :bank="false" :cards="player.cards" :end="game.end" />
    </div>
  </section>
</template>

<script setup>
const { updateScore, compareScores } = blackJack();

useHead({
  title: "Black Jack | Game",
});

const deck = reactive({ data: null });
const player = reactive({
  cards: [],
  score: 0,
});
const bank = reactive({
  cards: [],
  score: 0,
});
const game = reactive({
  end: false,
  message: "",
});

function showCards() {
  Object.assign(game, compareScores(bank.score, player.score, true));
}

async function drawCards(number) {
  try {
    const { data } = await useFetch(
      `https://www.deckofcardsapi.com/api/deck/${
        deck.data.deck_id
      }/draw/?count=${2 * number}`
    );

    for (let i = 0; i < 2 * number; i += 1) {
      if (i % number === 0 && i !== 1) {
        bank.cards.push(data.value.cards[i]);
      } else {
        player.cards.push(data.value.cards[i]);
      }
    }

    deck.data.remaining = data.value.remaining;

    updateScore(bank);
    updateScore(player);

    Object.assign(game, compareScores(bank.score, player.score, false));
  } catch (err) {
    console.log(err);
  }
}

async function newGame() {
  try {
    game.end = false;
    game.message = "";

    player.cards = [];
    player.score = 0;

    bank.cards = [];
    bank.score = 0;

    const { data } = await useFetch(
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"
    );
    deck.data = data.value;

    drawCards(2);
  } catch (err) {
    console.log(err);
  }
}

async function newRound() {
  try {
    let url = `https://www.deckofcardsapi.com/api/deck/${deck.data.deck_id}/pile/playedCards/add/?cards=`;

    player.cards.forEach((card) => {
      url += `${card.code},`;
    });
    bank.cards.forEach((card) => {
      url += `${card.code},`;
    });
    url = url.slice(0, -1);

    await useFetch(url);

    game.end = false;
    game.message = "";

    player.cards = [];
    player.score = 0;

    bank.cards = [];
    bank.score = 0;

    if (deck.data.remaining < 300) {
      await useFetch(
        `https://www.deckofcardsapi.com/api/deck/${deck.data.deck_id}/pile/playedCards/return/`
      );
      const { data } = await useFetch(
        `https://www.deckofcardsapi.com/api/deck/${deck.data.deck_id}/shuffle/`
      );
      deck.data = data.value;
    }

    drawCards(2);
  } catch (err) {
    console.log(err);
  }
}

onMounted(() => {
  newGame();
});
</script>

<style></style>
