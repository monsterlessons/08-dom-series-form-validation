function changeColor () {
  var elements = document.querySelectorAll(
    '.container input[type="checkbox"]:checked'
  )

  for (var i = 0; i < elements.length; i++) {
    elements[i].parentElement.style.color = 'red'
  }
}
