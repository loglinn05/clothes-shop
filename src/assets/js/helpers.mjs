// helper functions

export {
  isNumeric
}

function isNumeric(v) {
  return Number(parseFloat(v)) == v;
}