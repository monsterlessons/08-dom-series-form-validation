// var changeButton = document.querySelector('.change')
//
// changeButton.addEventListener('click', function () {
//   console.log('we clicked')
// })
//
// changeButton.addEventListener('click', function () {
//   console.log('we clicked 2')
// })

var firstElement = document.querySelector('.firstElement')
var secondElement = document.querySelector('.secondElement')

firstElement.addEventListener('mouseover', function () {
  secondElement.style.display = 'block'
})

firstElement.addEventListener('mouseout', function () {
  secondElement.style.display = 'none'
})
