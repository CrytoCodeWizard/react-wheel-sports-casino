const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({
    event: {
        name: String,
        type: String,
        team_red: String,
        team_black: String,
        date: Date,
        time: String,
        location: String,
        description: String,
        image: String
    },
    predictedWinner: {
        name: String,
        type: String,
    }
});

model.exports = mongoose.model("Prediction", PredictionSchema);