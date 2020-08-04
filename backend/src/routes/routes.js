const express = require('express');

const router = express.Router()

const carsControllers = require('../controllers/carsControllers')


router.post('/postar', carsControllers.store)
router.get('/lista', carsControllers.index)

module.exports = router