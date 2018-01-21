// parse & filter dishes on https://www.delivery-club.ru/srv/:cafe/:category/
// https://gist.github.com/a-x-/f3737eaac9bef3614558fef8da21b249

{

//
// runtime constiables
//

// e.g.
const path = window.location.pathname.match(/\/srv\/(\w+)\/(?:(\w+)\/)?/)
const params = {
  cafe: path[1], // e.g. 'Chajkhona_1',
  category: path[2] , // e.g. 'Supy',
}

//
// config
//

const reqParamNames = [
  'product_id',
  'quantity',
  's_id',
  'byWeight'
]

const stopDishesNames = flatten([
  'Лагман',
  'Суп-пюре',
  ['Ролл', 'САШИМИ', 'СУШИ'],
  ['ПАСТА', 'Макароны', 'Спагетти', 'Равиоли', 'Пенне'],
  'Оливье',
  'Вареники',
  'Омлет',
  'Сэндвич',
  'Каша пшенная',
  ['Блинчики', 'Блины'],
  'Сырники',
  'Вафли',
  'Творог',
  'Брускетта',
  ['Рис', 'Ризотто'],
  'Бургер',
  'Картофельное пюре',
  'ДЕСЕРТ',
]).map(name => name.toLowerCase())

const stopIngredients = [
  /лапш(а|ой|у|ы)/i,
  /рис(а|у|ом|е|овый|овая)?/i,
  /фасол(ь|ю|и|евый|евая)/i,
  /майонез(а|ом|у|ный|ная)?/i,
  /йогурт(а|ом|овый|овая)?/i,
  /сыр(ы|ом|у|ный)?/i,
  /моцарелл(а|ой)/i,
]

const stopDishesParams = {
  'Chajkhona_1': [{'product_id': 94530403}]
}

const lowPriorityIngredients = [
  /котлет(а|у|ой|ами)?/i,
  /сибас(а|у|ом)?/i,
]

const highPriorityIngredients = [
]

const highPriorityCategories = [
]

const lowPriorityCategories = [
]

const stopCategories = [
  'ДЕСЕРТЫ',
  'НАПИТКИ',
  'РОЛЛЫ',
  'САШИМИ',
  'СУШИ',
  'ПАСТА',
  'РИЗОТТО',
  'БРУСКЕТТЫ',
  'БЛИНЫ',
]



//
// main
//

;{
  const dishes = getDishes()
  const filtered = filter(dishes)
  console.log(filtered)

  // remove unliked dishes
  dishes.filter(dish => !filterDish(dish)).forEach(({ el }) => el.parentNode.removeChild(el) )
}

//
// lib
//

function getStopDishesParams() {
  return stopDishesParams[params.cafe] || [];
}
function flatten(array) {
  return [].concat.apply([], array)
}

function getDishes () {
  return [...document.querySelectorAll('[itemtype="http://schema.org/Thing"]')]
  .map(item => ({
    el: item,
    name: getValue(item.querySelector('[itemprop="name"]')),
    description: getValue(item.querySelector('[itemprop="description"]')),
    price: getValue(item.querySelector('form strong span:first-child')),
    ...getReqParams(item),
  }))
}

function getReqParams (item) {
  return reqParamNames.reduce((res, param) => ({...res,
    [param]: getValue(item.querySelector(`[name="${ param }"]`))
  }), {})
}
function getValue (el) {
  if (!el) return null
  const raw = el.value != null ? el.value : el.innerText
  const isStr = (raw) => typeof raw === 'string'
  const isNum = (raw) => !isNaN(raw)
  const toStr = (raw) => raw.trim()
  const toNum = (raw) => Number(raw)

  if (isNum(raw)) return toNum(raw)
  if (isStr(raw)) return toStr(raw)
}

function filter (dishes) {
  return dishes.filter(filterDish)
}

function filterDish (dish) {
  if (!checkName(dish.name)) return false
  if (!checkDescription(dish.description)) return false
  if (!checkByParams(dish)) return false
  // TODO: if (!checkByRecipe(dish)) return false
  return true
}
function checkName (name) {
  const name_ = name.toLowerCase()
  if (stopDishesNames.some(stopName => name_.includes(stopName))) return false
  if (stopIngredients.some((rx) => name_.match(rx))) return false
  return true
}
function checkDescription (text) {
  if (!text) return true
  const text_ = text.toLowerCase()
  return stopIngredients.every((rx) => !text_.match(rx))
}
function checkByParams(dishParams) {
  return getStopDishesParams().every(stopParams => !hasSubset(dishParams, stopParams))
}
function hasSubset(parent, subset) {
  return Object.entries(subset).every(([key, value]) => parent[key] === value)
}

// output sample
/*
[
  {
    "name": "Борщ Ханский",
    "description": "Сытный борщ, приготовленный из овощей и телятины. Подается с домашней сметаной",
    "price": 310,
      "product_id": 94530394,
      "quantity": 1,
      "s_id": 23079,
      "byWeight": 0,
  },
  {
    "name": "Балык Шурпа",
    "description": "Легкая уха, приготовленная из филе семги и судака, с добавлением овощей и душистого шафрана",
    "price": 475,
      "product_id": 94530395,
      "quantity": 1,
      "s_id": 23079,
      "byWeight": 0,
  }
]
*/
}
