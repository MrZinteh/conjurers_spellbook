const db = require('../../db');

exports.abberationsGet = async (req, res, next) => {
    db.query('SELECT * FROM abberations', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}