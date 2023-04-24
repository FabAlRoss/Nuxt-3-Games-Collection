export default function BlackJack() {
  function updateScore(hand) {
    hand.score = 0;
    hand.cards.forEach((card) => {
      const value = parseInt(card.value, 10);
      if (Number.isNaN(value) || value === 0) hand.score += 10;
      if (value > 0) hand.score += value;
    });
  }

  function compareScores(bank, player, end) {
    const game = { end: false, message: "" };
    if (bank > 21) {
      game.end = true;
      game.message = "You won!";
      return game;
    }
    if (player > 21) {
      game.end = true;
      game.message = "You lost!";
      return game;
    }
    if (end) {
      game.end = end;

      if (bank > player) {
        game.message = "You lost!";
        return game;
      }

      game.message = "You won!";
    }

    return game;
  }

  return { updateScore, compareScores };
}
