const db = require('../../db');

exports.constructsGet = async (req, res, next) => {
    db.query('SELECT * FROM constructs', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}