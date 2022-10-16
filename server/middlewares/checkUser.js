const fs = require("fs/promises");
const bcrypt = require("bcrypt");

exports.checkUserReg = async function (req, res, next) {
    const { username, email, password, password2 } = req.body;

    fs.readFile("db.json")
        .then((res) => {
            const db = JSON.parse(res);
            const user = db.find((el) => el.email === email);

            if (user) {
                throw "Email is already taken...";
            }

            if (password !== password2) {
                throw "Password don't match";
            }

            next();
        })
        .catch((err) => {
            console.log(err);
            res.status(401).json({ status: false, message: err });
        });
};

exports.checkUserLog = async function (req, res, next) {
    const { email, password } = req.body;

    try {
        const dbList = await fs.readFile("db.json");
        const db = JSON.parse(dbList);

        const user = db.find((el) => el.email === email);

        if (!user) {
            throw "No such an user";
        }

        const isPassOk = await bcrypt.compare(password, user.password);
        if (!isPassOk) {
            throw "Invalid credentials";
        }

        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ status: false, message: err });
    }
};
