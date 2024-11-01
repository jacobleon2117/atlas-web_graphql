const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const projectSchema = new Schema({
    title: String,
    weight: Number,
    description: String
});

const Project = model('Project', projectSchema);
module.exports = Project;