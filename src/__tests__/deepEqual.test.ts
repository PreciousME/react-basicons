import { deepEqual } from '../helpers/utils'

const objectA = { a: 1, b: 2 }
const objectB = { a: 1, b: 2 }
const objectC = { a: 1, b: 3 }
const objectD = { c: 1, d: 5 }
const objectE = { c: 1, d: 2 }

test('same keys, same values', () => {
    expect(deepEqual(objectA, objectB)).toBe(true)
})

test('different keys, same values', () => {
    expect(deepEqual(objectA, objectE)).toBe(false)
})

test('same keys, different values', () => {
    expect(deepEqual(objectA, objectC)).toBe(false)
})

test('different keys, different values', () => {
    expect(deepEqual(objectC, objectD)).toBe(false)
})
