function add(x, y) {
  return x + y
}

const v = add(1, 2)

console.log(v)


const v2 = add.call(undefined, 2,3)

console.log(v2)