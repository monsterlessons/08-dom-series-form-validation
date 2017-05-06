function changeColor () {
  var elements = document.querySelectorAll('.drinks li')
  var drinks = []

  for (var i = 0; i < elements.length; i++) {
    var content = elements[i].innerHTML.trim()
    drinks.push(content)
  }
  console.log(drinks)
}
