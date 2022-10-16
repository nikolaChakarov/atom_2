const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("../router");

const expressConfig = (app) => {
    app.use(
        cors({
            origin: "http://localhost:3000",
        })
    );

    app.use(express.json());

    app.use(cookieParser());

    app.use(router);
};

module.exports = expressConfig;
