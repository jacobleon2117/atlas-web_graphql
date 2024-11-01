const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const taskSchema = new Schema({
    title: String,
    weight: Number,
    description: String,
    projectId: String

});

const Task = model('Task', taskSchema);
module.exports = Task;