// get categories on https://www.delivery-club.ru/srv/:cafe/

// main

{
  var categories = getCategories()
  console.log(categories)
}

// lib

function getCategories() {
  return [...document.getElementById('category').querySelectorAll('a')]
  .map(a=>({
    title: a.innerText,
    category: getCategory(a),
  }))
  .filter(cat => cat.category)
}


function getCategory(a) {
  const m = a.getAttribute('href').match(/\/srv\/\w+\/(\w+)\//);
  return m && m[1];
}

// sample output
/*
[
  {
    "title": "Популярное",
    "category": "Popular"
  },
  {
    "title": "Горячие блюда",
    "category": "Gorjachije_bljuda"
  },
]
*/
