const db = require('../../db');

exports.fiendsGet = async (req, res, next) => {
    db.query('SELECT * FROM fiends', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.lesserDemonsGet = async (req, res, next) => {
    db.query("SELECT * from fiends WHERE type = 'Demon' AND cr <= 1", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.greaterDemonsGet = async (req, res, next) => {
    db.query("SELECT * from fiends WHERE type = 'Demon' AND cr <= 5", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}