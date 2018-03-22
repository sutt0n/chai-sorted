'use strict'
var isSorted = require('./is.sorted')

var chaiIsSorted = function (chai, array, useDescendingOrder) {
  var Assertion = chai.Assertion
  new Assertion(array).to.be.a('array')

  this.assert(
    isSorted(array, useDescendingOrder),
    'expected #{this} to be sorted in ' + (useDescendingOrder ? 'descending' : 'ascending') + ' order',
    'expected #{this} to not be sorted'
  )
}

module.exports = function (chai, utils) {
  chai.Assertion.addMethod('sorted', function (useDescendingOrder) {
    chaiIsSorted.call(this, chai, this._obj, useDescendingOrder)
  })

  utils.addProperty(chai.Assertion.prototype, 'descending', function () {
    chaiIsSorted.call(this, chai, this._obj, true)
  })

  utils.addProperty(chai.Assertion.prototype, 'ascending', function () {
    chaiIsSorted.call(this, chai, this._obj, false)
  })

  chai.Assertion.addMethod('sortedBy', function (key, useDescendingOrder) {
    var array = utils.flag(this, 'object').map(function (item) {
      return item[key]
    })
    chaiIsSorted.call(this, chai, array, useDescendingOrder)
  })

  chai.Assertion.addMethod('descendingBy', function (key) {
    var array = utils.flag(this, 'object').map(function (item) {
      return item[key]
    })
    chaiIsSorted.call(this, chai, array, true)
  })

  chai.Assertion.addMethod('ascendingBy', function (key) {
    var array = utils.flag(this, 'object').map(function (item) {
      return item[key]
    })
    chaiIsSorted.call(this, chai, array, false)
  })
}
