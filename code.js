var app = document.querySelector('.app')
var title = document.createElement('div')
title.className = 'title'
title.innerHTML = 'This is the title of news'

app.insertBefore(title, app.firstChild)

title.remove()
