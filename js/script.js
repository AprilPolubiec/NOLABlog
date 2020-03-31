$(document).ready(function() {
  //Fill category and visit length lists
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
  //Instagrammer

  var lengths = {
    threeDays: '3 days',
    fiveDays: '5 days',
    oneWeek: '1 week',
    twoWeeks: '2 weeks'
  }

  Object.entries(categories).forEach(function([key, value]) {
    var optionValue = key
    var text = value
    var el = document.createElement('option')
    el.textContent = text
    el.value = optionValue
    $('#categories').append(el)
  })

  Object.entries(lengths).forEach(function([key, value]) {
    var optionValue = key
    var text = value
    var el = document.createElement('option')
    el.textContent = text
    el.value = optionValue
    $('#lengths').append(el)
  })

  //On button click
  $('#shiny-button').click(function() {
    var category = $('#categories')
      .children('option:selected')
      .val()
    var length = $('#lengths')
      .children('option:selected')
      .val()
    $('#hero').addClass('small')
    $("#post-container").css("display", "flex")
  })
})