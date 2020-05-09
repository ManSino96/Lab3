document.querySelector('#search-text').addEventListener('input',
  function (e) {
    var result = []
    console.log(state)
    switch (state) {
      case 'name':
        result = students.filter(student => student.name.includes(`${e.target.value}`))
        break
      case 'studentNumber':
        result = students.filter(student => student.studentNumber === e.target.value)
        break
      case 'yearOfStudy':
        result = students.filter(student => student.yearOfStudy === e.target.value)
        break
      case 'electives':
        result = students.filter(student => student.electives.filter(elective => elective.courseCode.includes(`${e.target.value}`)))
        break
      default:
    }

    console.log(e.data)
    result.forEach(function (element) {
      displayStudent(element)
    })
  })
var state = ''
document.querySelector('#searchOption').addEventListener('input', function (e) {
  console.log(`${e.target.value}`)
  state = `${e.target.value}`
}
)

const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}
const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}
const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}
const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}
const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne, electiveTwo, electiveFour]
  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]

const displayStudent = function (student) {
  const studentList = document.getElementById('students')
  const studentElement = document.createElement('p')
  const studentName = document.createTextNode(`${student.name}`)
  const linebreak = document.createElement('br')

  studentElement.appendChild(studentName)
  studentElement.appendChild(linebreak)
  studentList.appendChild(studentElement)
  document.body.appendChild(studentList)
}
