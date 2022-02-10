const db = require('../../db');

exports.shadowSpiritsGet = async (req, res, next) => {
    db.query('SELECT * FROM shadow_spirits', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}