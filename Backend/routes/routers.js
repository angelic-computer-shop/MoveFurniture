const db = require('../controller/controller.js')
const express = require("express");
const router = express.Router();

//user
router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

//driver

router.get('/driver', db.getDrivers)
router.get('/driver/:id', db.getDriverById)
router.post('/driver', db.createDriver)
router.post('/auth/log', db.login)
router.put('/driver/:id', db.updateDriver)
router.delete('/driver/:id', db.deleteDriver)

module.exports = router;