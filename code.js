function changeColor () {
  var element = document.getElementById('paragraph')
  console.log(
    'Clicked on button',
    element.style
  )

  element.style.color = 'red'
  element.style.fontSize = '24px'
}
