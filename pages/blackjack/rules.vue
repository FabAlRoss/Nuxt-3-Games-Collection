<template>
  <section
    class="relative h-screen w-screen bg-blackjack-bg bg-no-repeat bg-cover"
  >
    <div
      class="flex flex-col justify-between items-center h-screen py-8 font-lobster text-l text-white"
    >
      <h1 class="flex font-prism text-3xl">Rules</h1>
      <PerfectScrollBar
        class="flex flex-wrap justify-center rounded-md max-w-3xl h-5/6 px-16 py-8 bg-black/50"
      >
        <h2 class="font-prism text-xl mt-4">Object of the Game</h2>
        <p class="mt-2">
          Each participant attempts to beat the dealer by getting a count as
          close to 21 as possible, without going over 21.
        </p>
        <h2 class="font-prism text-xl mt-4">The Pack</h2>
        <p class="mt-2">
          The standard 52-card pack is used, but in most casinos several decks
          of cards are shuffled together. The six-deck game (312 cards) is the
          most popular. In addition, the dealer uses a blank plastic card, which
          is never dealt, but is placed toward the bottom of the pack to
          indicate when it will be time for the cards to be reshuffled. When
          four or more decks are used, they are dealt from a shoe (a box that
          allows the dealer to remove cards one at a time, face down, without
          actually holding one or more packs).
        </p>
        <h2 class="font-prism text-xl mt-4">Card Values/scoring</h2>
        <p class="mt-2">
          It is up to each individual player if an ace is worth 1 or 11. Face
          cards are 10 and any other card is its pip value.
        </p>
        <h2 class="font-prism text-xl mt-4">The Deal</h2>
        <p class="mt-2">
          When all the players have placed their bets, the dealer gives one card
          face up to each player in rotation clockwise, and then one card face
          up to themselves. Another round of cards is then dealt face up to each
          player, but the dealer takes the second card face down. Thus, each
          player except the dealer receives two cards face up, and the dealer
          receives one card face up and one card face down. (In some games,
          played with only one deck, the players' cards are dealt face down and
          they get to hold them. Today, however, virtually all Blackjack games
          feature the players' cards dealt face up on the condition that no
          player may touch any cards.)
        </p>
        <h2 class="font-prism text-xl mt-4">The Play</h2>
        <p class="mt-2">
          The player to the left goes first and must decide whether to "stand"
          (not ask for another card) or "hit" (ask for another card in an
          attempt to get closer to a count of 21, or even hit 21 exactly). Thus,
          a player may stand on the two cards originally dealt to them, or they
          may ask the dealer for additional cards, one at a time, until deciding
          to stand on the total (if it is 21 or under), or goes "bust" (if it is
          over 21). In the latter case, the player loses and the dealer collects
          the bet wagered. The dealer then turns to the next player to their
          left and serves them in the same manner. The combination of an ace
          with a card other than a ten-card is known as a "soft hand," because
          the player can count the ace as a 1 or 11, and either draw cards or
          not. For example with a "soft 17" (an ace and a 6), the total is 7 or
          17. While a count of 17 is a good hand, the player may wish to draw
          for a higher total. If the draw creates a bust hand by counting the
          ace as an 11, the player simply counts the ace as a 1 and continues
          playing by standing or "hitting" (asking the dealer for additional
          cards, one at a time).
        </p>
        <h2 class="font-prism text-xl mt-4">The Dealer's Play</h2>
        <p class="mt-2">
          When the dealer has served every player, the dealers face-down card is
          turned up. If the total is 17 or more, it must stand. If the total is
          16 or under, they must take a card. The dealer must continue to take
          cards until the total is 17 or more, at which point the dealer must
          stand. If the dealer has an ace, and counting it as 11 would bring the
          total to 17 or more (but not over 21), the dealer must count the ace
          as 11 and stand. The dealer's decisions, then, are automatic on all
          plays, whereas the player always has the option of taking one or more
          cards.
        </p>
        <h2 class="font-prism text-xl mt-4">Settlement</h2>
        <p class="mt-2">
          A bet once paid and collected is never returned. Thus, one key
          advantage to the dealer is that the player goes first. If the player
          goes bust, they have already lost their wager, even if the dealer goes
          bust as well. If the dealer goes over 21, the dealer pays each player
          who has stood the amount of that player's bet. If the dealer stands at
          21 or less, the dealer pays the bet of any player having a higher
          total (not exceeding 21) and collects the bet of any player having a
          lower total. If there is a stand-off (a player having the same total
          as the dealer), no chips are paid out or collected.
        </p>
        <p class="mt-4">
          Source:
          <a href="https://bicyclecards.com/how-to-play/blackjack/">
            https://bicyclecards.com/how-to-play/blackjack/</a
          >
        </p>
      </PerfectScrollBar>
      <NuxtLink to="/blackjack/">
        <div
          class="flex w-fit mt-6 pb-6 font-prism text-center text-xl text-white hover:font-outline-yellow"
        >
          Back
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Black Jack | Rules",
});
</script>
