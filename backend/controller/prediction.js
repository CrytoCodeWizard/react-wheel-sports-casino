const Prediction = require("../model/Prediction");

const add = (req, res) => {
    const { eventName, predictedWinner } = req.body;

    if(!eventName || !predictedWinner) {
        res.status(400).json({
            message: "Please provide all the required fields"
        });
    } else {
        const newPrediction = new Prediction({
            eventName,
            predictedWinner
        });

        res.status(201).json(newPrediction);
    }
}


const getAll = (req, res) => {
    const { eventName } = req.body;

    Prediction.find({name: eventName})
       .then(predictions => {
            res.status(200).json(predictions);
        })
       .catch(err => {
            res.status(500).json({
                message: "Error retrieving all predictions",
                error: err.message
            });
        });
}

module.exports = {
    add,
    getAll,
}