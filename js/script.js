//Fill category list

var categories = {
  food: 'Foodie',
  music: 'Music Fan',
  celebrity: 'Celebrity Enthusiast',
  party: 'Party Animal',
  fashion: 'Fashion Guru',
  history: 'History Buff',
  art: 'Art Aficionado',
  nature: 'Nature Lover'
}

var lengths = {
  threeDays: '3 days',
  fiveDays: '5 days',
  oneWeek: '1 week',
  twoWeeks: '2 weeks'
}

var categoryListEl = document.getElementById('categories')
var lengthsEl = document.getElementById('lengths')

Object.entries(categories).forEach(function([key, value]) {
  var optionValue = key
  var text = value
  var el = document.createElement('option')
  el.textContent = text
  el.value = optionValue
  categoryListEl.appendChild(el)
})

Object.entries(lengths).forEach(function([key, value]) {
  var optionValue = key
  var text = value
  var el = document.createElement('option')
  el.textContent = text
  el.value = optionValue
  lengthsEl.appendChild(el)
})

function displayCategories() {
  var categoryEl = document.getElementsByClassName('category-container')[0]
  categoryEl.classList.add('open')
}
