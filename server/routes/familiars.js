const db = require('../../db');

exports.familiarsGet = async (req, res, next) => {
    db.query('SELECT * FROM familiars', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}