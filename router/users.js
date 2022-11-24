const express = require('express')
const router = express.Router()

const usercontorller = require('../controllers/user')

router.get('/users', usercontorller.index)
router.get('/users/:id', usercontorller.show)
router.post('/users', usercontorller.store)
router.put('/users/:id', usercontorller.update)
router.delete('/users/:id', usercontorller.delete)

module.exports = router