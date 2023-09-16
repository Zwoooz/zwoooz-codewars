/* eslint-disable no-param-reassign */
// https://www.codewars.com/kata/534ffb35edb1241eda0015fe

function scoreHand(cards) {
  for(let i = 0; i < cards.length; i += 1) {
    cards[i] = cards[i].replace(/J|Q|K/g, 10).replace(/A/g, 11);
  }
  while(cards.map(Number).reduce((a, b) => a + b) > 21 && cards.map(Number).includes(11)) {
    cards[cards.indexOf('11')] = '1';
  }
  return cards.map(Number).reduce((a, b) => a + b);
}
