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