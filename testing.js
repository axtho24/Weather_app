module.exports.color = function color (temperature) {
  temperature = temp
  if (temperature > 80) {
  return 'red'
} else if (temperature < 80 && temperature > 60) {
  return 'orange'
} else if (temperature < 60 ) {
  return 'blue'
}
}
