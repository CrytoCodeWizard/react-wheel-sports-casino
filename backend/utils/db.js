const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {})
    .then(() => console.log("mongodb successfully connected"))
    .catch((err) => console.log("error : ", err));