'use strict'

module.exports = function (array, reverse) {
  var sorted = true
  var index = 0
  var current
  var nextItem
  while (sorted && index < array.length - 1) {
    // TODO: I suspect there is a better way to do the "reversal" logic and feedback is much appreciated!
    current = reverse ? array[index + 1] : array[index]
    nextItem = reverse ? array[index] : array[index + 1]
    sorted = current <= nextItem
    index++
  }
  return sorted
}
