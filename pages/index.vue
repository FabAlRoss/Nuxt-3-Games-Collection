<template>
  <div class="flex items-center justify-center gap-x-16 h-screen bg-black">
    <Nav-Tile :link="'/rickmorty/'" :background="'bg-rickmorty-bg'">
      <span
        class="mb-12 font-frijole text-4xl text-teal font-outline-1 brightness-200 contrast-75"
      >
        Play
      </span>
    </Nav-Tile>

    <Nav-Tile :link="'/blackjack/'" :background="'bg-blackjack-bg'">
      <span class="mb-16 font-prism text-4xl text-white font-outline-yellow">
        Play
      </span>
    </Nav-Tile>
  </div>
</template>
