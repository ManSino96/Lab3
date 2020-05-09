'use strict'
var students = [{ name: 'Thoko', studentNumber: 12345 },
  { name: 'Tim', studentNumber: 13579 },
  { name: 'Sino', studentNumber: 10905 },
  { name: 'Margie', studentNumber: 10907 },
  { name: 'Steve', studentNumber: 10102 }]

var editButtons = []

const AddInput = function (studentReference) {
  console.log('started')
  const textArea = document.createElement('input')
  const numarea = document.createElement('input')
  const linebreak = document.createElement('br')
  const saveButton = document.createElement('button')
  const saveText = document.createTextNode('save')

  saveButton.appendChild(saveText)
  saveButton.id = 'saveInfo'

  textArea.type = 'text'
  numarea.type = 'number'

  textArea.id = studentReference + 'name'
  numarea.id = studentReference + 'num'

  document.body.appendChild(textArea)
  document.body.appendChild(linebreak)
  document.body.appendChild(linebreak)
  document.body.appendChild(numarea)
  document.body.appendChild(saveButton)
}

const displayStudents = function (element) {
  const text = document.createTextNode(`${element.name}  ${element.studentNumber}  `)
  const paragraph = document.createElement('p')
  const studentList = document.createElement('ul') // Create <ul> element
  const studentTag = document.createElement('li')
  const editButton = document.createElement('button')
  const buttonText = document.createTextNode('Edit')

  paragraph.id = 'paragraph' + `${element.name}`

  editButton.id = `${element.name}`

  editButton.appendChild(buttonText)
  studentTag.appendChild(text)
  studentTag.appendChild(editButton)

  studentList.appendChild(studentTag)
  paragraph.appendChild(studentList)

  document.body.appendChild(paragraph)
}

const deleteList = document.createElement('button')
const buttonText = document.createTextNode('Delete List')
deleteList.appendChild(buttonText)
deleteList.type = 'button'
deleteList.id = 'studentDelete'

const button = document.getElementById('studentButton')
button.addEventListener('click', function () {
  students.forEach(element => displayStudents(element))
  document.body.appendChild(deleteList)
  buttonForStudent() // creates edit buttons

  // console.log('Message is being sent')
}, false)

const deleteStudentList = function () {
  const bodyChildNodes = document.body.childNodes
  console.log(bodyChildNodes)

  for (var count = 6; count < bodyChildNodes.length; count++) {
    console.log(bodyChildNodes[count].nodeName)

    switch (bodyChildNodes[count].nodeName) {
      case 'P':
        document.body.removeChild(bodyChildNodes[count])
        break
      case 'BUTTON':
        document.body.removeChild(bodyChildNodes[count])
        break

      default:
        console.log('Do not delete')
    }
  }

  console.log(bodyChildNodes)

  // document.body.removeChild(buttondata)
}

const buttonForStudent = function () {
  students.forEach(function (element) {
    const button_ = document.createElement('button')
    button_.id = `${element.name}`
    editButtons.push(button_)
  })
}

deleteList.addEventListener('click', function () { deleteStudentList() }, false)

const saveInput = document.getElementById('saveInfo')

saveInput.addEventListener('click', function () { saveInformation() }, false)
const saveInformation = function () {
  // alter the array and
}
buttonForStudent()

editButtons[0].addEventListener('click', function () { AddInput(editButtons[0].id) }, false)
editButtons[1].addEventListener('click', function () { AddInput(editButtons[1].id) }, false)
editButtons[2].addEventListener('click', function () { AddInput(editButtons[2].id) }, false)
editButtons[3].addEventListener('click', function () { AddInput(editButtons[3].id) }, false)
editButtons[4].addEventListener('click', function () { AddInput(editButtons[4].id) }, false)
