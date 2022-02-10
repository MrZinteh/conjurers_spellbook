const db = require('../../db');

exports.draconicSpiritsGet = async (req, res, next) => {
    db.query('SELECT * FROM draconic_spirits', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}