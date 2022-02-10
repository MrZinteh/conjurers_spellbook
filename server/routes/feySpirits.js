const db = require('../../db');

exports.feySpiritsGet = async (req, res, next) => {
    db.query('SELECT * FROM fey_spirits', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}