const {Schema, model} = require('mongoose')

const StudentSchema = new Schema({
    name: String,
    matriculation: Number,
    discipline: String
})

module.exports = model('Student', StudentSchema);