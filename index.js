/* const advent = (text) => {
  const test = text
    .split('\n')
    .toString()
    .split(',,')
    .map((item) => {
      const test = item.split(',')
      const test1 = test.map((a) => parseInt(a))
      return test1.reduce((a, b) => a + b, 0)
    })
    .sort((a, b) => b - a)
  // return test.findIndex((a) => isNaN(a))
  return test.slice(0, 3).reduce((a, b) => a + b, 0)
} */

/* const advent = (text) => {
  const test = text.split('\n').map((item) => {
    const test = item.split(' ')
    const [{ v }] = COMBINATIONS.filter(({ c }) => JSON.stringify(test) === JSON.stringify(c))
    return v
  })
  return test.reduce((a, b) => a + b, 0)
}

const COMBINATIONS = [
  { c: ['A', 'X'], v: 3 },
  { c: ['A', 'Y'], v: 4 },
  { c: ['A', 'Z'], v: 8 },
  { c: ['B', 'X'], v: 1 },
  { c: ['B', 'Y'], v: 5 },
  { c: ['B', 'Z'], v: 9 },
  { c: ['C', 'X'], v: 2 },
  { c: ['C', 'Y'], v: 6 },
  { c: ['C', 'Z'], v: 7 },
] */

const VALORES = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
}
const advent = (text) => {
  const hola = text.split('\n')
  let hola1 = []
  for (let i = 0; i < hola.length; i = i + 3) {
    hola1.push(hola.slice(i < 0 ? 0 : i, i + 3))
  }
  const test = hola1.map((item) => {
    const newArray = item.map((i) => [...new Set(i.split(''))])
    //newArray -> [[...],[...],[...]]
    console.log(newArray)
    const test1 = newArray.map((item, index) => {
      //item -> ['a','b','c','a','d','f']
      return item.filter((letter) => {
        return newArray[index + 1 <= newArray.length - 1 ? index + 1 : 0].includes(letter)
      })
    })
    // const part1 = [...new Set(item.slice(0, item.length / 2).split(''))]
    // const part2 = [...new Set(item.slice(item.length / 2, item.length).split(''))]
    // const [test1] = part1.filter((item) => {
    //   return part2.includes(item)
    // })
    return test1
  })
  // return test.map((letter) => VALORES[letter]).reduce((a, b) => a + b, 0)
  return test
}

document.querySelector('input').addEventListener('change', ({ target }) => {
  if (target.files[0]) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = function ({ target }) {
      console.log(advent(target.result))
    }
    reader.readAsText(file)
  }
})
