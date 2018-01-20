console.time('s')

const user = {
  name: "zan",
  email: "anlasheng@gmail.com"
}

/**
 * JSON.stringify()
 * json 转 字符串
 */
const userStr = JSON.stringify(user)

console.log(userStr)

console.timeEnd('s')


/**
 * JSON.parse()
 * 可以接受第二个参数, 它可以在返回之前转换对象值
 * 比如这例子中，将返回对象的属性值大写
 */
const newUserStr = JSON.parse(userStr, (key, v) => {
  if (typeof v === 'string') {
    return v.toUpperCase()
  }
  return v
})

console.log(newUserStr)

/**
 * JSON.stringify()
 * 可以带两个额外的参数，第一个是替换函数，第二个间隔字符串，用作隔开返回字符串。
 * replacer 该参数可以是多种类型,
 * 如果是一个函数,则它可以改变一个javascript对象在字符串化过程中的行为
 * 如果是一个包含 String 和 Number 对象的数组,则它将作为一个白名单
 * 只有那些键存在域该白名单中的键值对才会被包含进最终生成的JSON字符串中.
 * 如果该参数值为null或者被省略,则所有的键值对都会被包含进最终生成的JSON字符串中
 * 替换函数可以用来过滤值，因为任何返回 undefined 的值将不在返回的字符串中
 * @param {*} key 
 * @param {*} v 
 */
function replacer(key, v) {
  console.log(typeof v)
  if (key === 'email') {
    return undefined
  }
  return v
}
const userStr2 = JSON.stringify(user, replacer)

console.log(userStr2)

const userStr3 = JSON.stringify(user, null, '...')

console.log(userStr3)


/**
 * 用 JSON.stringify 来格式化对象
 */
const censor = function(key,value){
  if(typeof(value) == 'function'){
    return Function.prototype.toString.call(value)
  }
  return value
}

const foo = {
  bar: '1',
  baz: 3,
  o: {
    name: 'zanjs',
    age: 21,
    info: {
      sex: '男',
      getSex: function() {
        return 'sex'
      }
  }}
}
console.log(JSON.stringify(foo, censor, 4))