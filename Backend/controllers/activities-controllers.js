const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator')

let DUMMY_ACTIVITIES = [
    {
        id: '1', 
        description: 'Play in the snow'
    },
    {
        id: '2', 
        description: 'Play monopoly'
    },
    {
        id: '3', 
        description: 'Buy a gift for your neighbour'
    }
];

const getRandomActivity = (req, res, next) => {
    const randomActivity = DUMMY_ACTIVITIES[Math.floor(Math.random() * DUMMY_ACTIVITIES.length)];
    res.json({randomActivity});
};

const createActivity = (req, res, next) => {
    // Checks the request for any validation errors which were detected based on the setup on activities-route
    const errors = validationResult(req);
    // if empty then throw an error
    if (!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }

    const { description } = req.body; 

    const createdActivity = {
        id: uuidv4(),
        description
    };

    DUMMY_ACTIVITIES.push(createActivity);

    res.status(201).json({activity: createdActivity});
};


const updateActivity = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    };

    const { description } = req.body; 
    const activityId = req.params.id; 

    const updatedActivity = { ...DUMMY_ACTIVITIES.find(a => a.id === activityId)}; 
    const activityIndex = DUMMY_ACTIVITIES.findIndex(a => a.id === activityId);
    updatedActivity.description = description;


    DUMMY_ACTIVITIES[activityIndex] = updatedActivity;

    res.status(200).json({activity: updatedActivity})
};


const deleteActivity = (req, res, next) => {
    const activityId = req.params.id;
    DUMMY_ACTIVITIES = DUMMY_ACTIVITIES.filter(a => a.id !== activityId); 
    res.status(200).json({ message: "Deleted activity." });
};


exports.getRandomActivity = getRandomActivity;
exports.createActivity = createActivity;
exports.deleteActivity = deleteActivity;
exports.updateActivity = updateActivity;