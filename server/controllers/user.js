const fs = require("fs/promises");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async function (req, res) {
    const { username, email, password } = req.body;

    try {
        const dbList = await fs.readFile("db.json", { encoding: "utf-8" });
        const db = JSON.parse(dbList);

        const hashed = await bcrypt.hash(password, Number(process.env.SALT));

        const newUser = { id: Date.now(), username, email, password: hashed };
        db.push(newUser);

        await fs.writeFile("db.json", JSON.stringify(db));

        const token = jwt.sign({ user: newUser }, process.env.SECRET, {
            expiresIn: 360000,
        });

        res.status(200).json({
            status: true,
            message: "register successfully!",
            token,
        });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

exports.login = async function (req, res) {
    try {
        const user = req.user;

        const token = jwt.sign({ user }, process.env.SECRET, {
            expiresIn: 360000,
        });

        res.status(200).json({
            status: true,
            message: "logged in successfully!",
            token,
        });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
