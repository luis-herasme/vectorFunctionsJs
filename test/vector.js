
/* global describe, it */

const expect = require('chai').expect
const vector = require('../vector')

describe('Given an angle', function () {
  it('I should be able to convert that angle to degree', function () {
    expect(180).deep.equal(vector.toDegree(Math.PI))
  })

  it('I should be able to convert that angle to radians', function () {
    expect(Math.PI).deep.equal(vector.toRadian(180))
  })
})

describe('Given an instance of the vector functions set', function () {
  it('I should be able to add 2 vectors', function () {
    expect([1, 10]).deep.equal(vector.add([0, 10], [1, 0]))
    expect([0, 5, 10]).deep.equal(vector.add([0, 3.5], [0, 1.5], [0, 0, 10]))
  })

  it('I should be able to subtract 2 vectors', function () {
    expect([9, 10]).deep.equal(vector.sub([10, 20], [1, 10]))
  })

  it('I should be able to scale a vectors', function () {
    expect([10, 10]).deep.equal(vector.mult([5, 5], 2))
  })

  it('I should be able to inverse a vectors', function () {
    expect([-5, -5]).deep.equal(vector.inverse([5, 5]))
  })

  it('I should be able to normalize a vectors', function () {
    expect([0.6, 0.8]).deep.equal(vector.normalize([3, 4]))
  })

  it('I should be able to see the length of a vectors', function () {
    expect(5).deep.equal(vector.mag([3, 4]))
  })

  it('I should be able to limit the length of a vector', function () {
    expect(4).deep.equal(vector.mag(vector.limit([3, 4], 4)))
  })

  it('I should be able to copy a vector', function () {
    expect([3, 4]).deep.equal(vector.copy([3, 4]))
  })

  it('I should be able to get the dot product of 2 vectors', function () {
    expect(200).deep.equal(vector.dot([10, 10], [10, 10]))
  })

  it('I should be able to get the angle of a vector', function () {
    expect(Math.PI / 4).deep.equal(vector.angle([10, 10]))
  })

  it('I should be able to move a vector moveTowards another vector', function () {
    expect([2, 0]).deep.equal(vector.moveTowards([0, 0], [5, 0], 2))
  })

  it('I should be able to see the distance between 2 vectors', function () {
    expect(5).deep.equal(vector.distance([10, 10], [14, 13]))
  })

  it('I should be able to see the angle between 2 vectors', function () {
    expect(Math.PI / 2).deep.equal(vector.angleBetween([0, 10], [10, 0]))
  })

  it('I should be able to set an angle to a vector', function () {
    expect(Math.PI / 2).deep.equal(vector.angle(vector.setAngle([10, 10], Math.PI / 2)))
  })

  it('I should be able to add an angle to a vector', function () {
    expect(Math.PI).deep.equal(vector.angle(vector.addAngle([0, 10], Math.PI / 2)))
  })

  it('I should be able use cross2d', function () {
    expect(0).deep.equal(vector.cross2d([3, 4], [3, 4]))
  })

  it('I should be able to create a vector from direction and magnitude', function () {
    expect([10, 0]).deep.equal(vector.angleMagnitude(0, 10))
  })

  it('I should be able to get the cross3d product of 2 3d vectors', function () {
    expect([-5, 45, -35]).deep.equal(vector.cross3d([5, 6, 7], [10, 5, 5]))
  })

  it('I should be able to see the linearIntersect of 2 lines', function () {
    expect([0.5, 0.5]).deep.equal(vector.linearIntersect([0, 0], [10, 0], [5, 5], [5, -5]))
  })
})
