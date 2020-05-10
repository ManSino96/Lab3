const express = require('express')
const path = require('path')
const router = express.Router()
var classList = [] // our class list array

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.post('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
// Try browsing to /api/get/0 once you've added some entries
})
router.post('/api/create', function (req, res) {
  console.log('creating a student entry')
})
router.post('/api/delete', function (req, res) {
  console.log('deleting a student entry')
})
router.post('/api/edit', function (req, res) {
  console.log('editing a student entry')
})
router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  console.log('Deleting the following student:', req.body.studentDelete)
  classList.splice(classList.findIndex((element) => element === req.body.studentDelete), 1, '')
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/edit', function (req, res) {
  console.log('Editing the following student:', req.body.studentEdit, 'and adding this  student:', req.body.studentReplace)
  classList.splice(1, classList.findIndex((element) => element === req.body.studentEdit), req.body.studentReplace)
  res.redirect(req.baseUrl + '/api/list')
})
module.exports = router
