const express = require('express');
const { check } = require('express-validator');

const activitiesControllers = require('../controllers/activities-controllers');

const router = express.Router();

// Get random activity
router.get('/random', activitiesControllers.getRandomActivity);

// Create activity
router.post('/', [check('description').not().isEmpty().isLength({min: 5})], activitiesControllers.createActivity); 


// Update activity by id
router.patch('/:id', [check('description').not().isEmpty().isLength({min: 5})], activitiesControllers.updateActivity);

// Delete activity by id
router.delete('/:id', activitiesControllers.deleteActivity);

module.exports = router;
