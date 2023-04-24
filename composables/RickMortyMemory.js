export default function RickMortyMemory() {
  function getRandomInt(min, max) {
    return Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
    );
  }

  function getRandArray(length, start, end) {
    const randArray = new Array(length).fill(null);
    let count = 0;

    while (count < length) {
      const index = getRandomInt(0, length);
      const value = getRandomInt(start, end);
      if (
        randArray[index] === null &&
        randArray.findIndex((ele) => ele === value) === -1
      ) {
        randArray[index] = value;
        count += 1;
      }
    }

    return randArray;
  }

  function shuffle(cards) {
    const shuffledCards = [];
    const indices = getRandArray(cards.length, 0, cards.length);

    indices.forEach((index) => shuffledCards.push(cards[index]));

    return shuffledCards;
  }

  function getElapsedTime(elapsedMilliSecondes) {
    const minutes = Math.floor(elapsedMilliSecondes / 60000);
    const secondes = Math.floor(
      (elapsedMilliSecondes - minutes * 60000) / 1000
    );
    const milliseconds =
      elapsedMilliSecondes - minutes * 60000 - secondes * 1000;

    let stringTime = `${minutes}:`;
    if (minutes < 10) stringTime = `0${minutes}:`;

    stringTime = `${stringTime + secondes}:`;
    if (secondes < 10) {
      stringTime = stringTime.slice(0, -2);
      stringTime = `${stringTime}0${secondes}:`;
    }

    stringTime += milliseconds;
    if (milliseconds < 10) {
      stringTime = stringTime.slice(0, -1);
      stringTime = `${stringTime}00${milliseconds}`;
    }

    if (milliseconds < 100) {
      stringTime = stringTime.slice(0, -2);
      stringTime = `${stringTime}0${milliseconds}`;
    }

    if (elapsedMilliSecondes === 0) stringTime = "00:00:00";

    return stringTime;
  }

  return {
    getRandomInt,
    getRandArray,
    shuffle,
    getElapsedTime,
  };
}
