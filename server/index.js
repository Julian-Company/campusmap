
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const BuildingModel = require("./models/Buildings")
const cors = require('cors')

// information
const port = 3001
const password = "WzmmCJ4Zw3tRyeUC"

// connects to cluster
mongoose.connect(`mongodb+srv://mpeccia72:${password}@locations.bhbyozu.mongodb.net/Locations?retryWrites=true&w=majority&appName=Locations`)

// automatically parses requests into json objects
app.use(express.json())

app.use(cors())

app.get("/getBuildings", (req, res) => {
    BuildingModel.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new BuildingModel(user)
    await newUser.save()
    res.json(user)
})

app.listen(port, () => {
    console.log("Server running")
})