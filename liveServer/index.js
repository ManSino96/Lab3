const button = document.getElementById('addButton')
button.addEventListener('click', function () {
  const paragraph = document.createElement('p') // Create <p> element
  const text = document.createTextNode('This is a student') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  document.body.appendChild(paragraph) // Append <p> to <body>
}, false)

const headerButton = document.getElementById('addHeadingButton')
headerButton.addEventListener('click', function () {
  const paragraph = document.createElement('h1')
  const title = document.createTextNode('Student Page 2020')
  paragraph.appendChild(title)
  document.body.appendChild(paragraph)
}, false)

const youTube = document.getElementById('YouTube')
youTube.addEventListener('click', function () {
  window.location = 'https://www.youtube.com'
}, false)

const hyperlink = document.getElementById('Href')
hyperlink.addEventListener('click', function () {
  const a = document.createElement('a')
  const text = document.createTextNode('Click This link')
  a.href = 'https://www.youtube.com'
  a.appendChild(text)

  document.body.appendChild(a)
}, false)
