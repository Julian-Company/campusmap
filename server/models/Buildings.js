
const mongoose = require('mongoose')

const BuildingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const BuildingModel = mongoose.model("buildings", BuildingSchema)
module.exports = BuildingModel