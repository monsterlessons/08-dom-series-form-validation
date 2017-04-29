function changeColor () {
  var elements = document.getElementsByClassName('article')
  console.log(elements)


  for(var i = 0; i < elements.length; i++) {
    elements[i].style.color = 'red'
  }
}
