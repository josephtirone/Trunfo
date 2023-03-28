const MAX_NUMBER = 210;
const MAX_UNITY = 90;
export default function validate({ cardName, cardDescription, cardImage, cardRare,
  cardAttr1, cardAttr2, cardAttr3 }) {
  if ([cardName, cardDescription, cardImage, cardRare].some((value) => value === '')) {
    return false;
  }
  if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > MAX_NUMBER) {
    return false;
  }
  if ([cardAttr1, cardAttr2, cardAttr3].some((valor) => Number(valor) > MAX_UNITY
    || Number(valor) <= 0)) {
    return false;
  }
  return true;
}
