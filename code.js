var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
var from = form.querySelector('.from')
var password = form.querySelector('.password')
var passwordConfirmation = form.querySelector('.passwordConfirmation')
var where = form.querySelector('.where')
var message = form.querySelector('.message')
var fields = form.querySelectorAll('.field')

var generateError = function (text) {
  var error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      var error = generateError('Cannot be blank')
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
}

var checkPasswordMatch = function () {
  if (password.value !== passwordConfirmation.value) {
    console.log('not equals')
    var error = generateError('Password doesnt match')
    password.parentElement.insertBefore(error, password)
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  removeValidation()

  checkFieldsPresence()

  checkPasswordMatch()
})
