const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { add, getAll } = require("./controller/prediction");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/predictions", add);
app.get("/api/predictions", getAll);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
