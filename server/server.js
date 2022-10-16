require("dotenv").config();
const express = require("express");
const expressConfig = require("./config/express.config");

const app = express();

expressConfig(app);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
