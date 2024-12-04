const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    description: { type: String, required: true }
});