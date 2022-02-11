const db = require('../../db');

exports.minionsGet = async (req, res, next) => {
    db.query('SELECT * FROM minions', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.minionsPost = async (req, res, next) => {
    const name = req.query.name;
    const type = req.query.type;
    const spellSource = req.query.spellSource;
    db.query('INSERT INTO minions (name, type, spell_source) VALUES ($1, $2, $3)', [name, type, spellSource], (err, result) => {
        if (err) {
            console.log(err);
            res.status(403).send(err);
        } else {
            console.log("success")
            res.status(200).json({
                name: name,
                type: type,
                spellSource: spellSource
            });
        }
    })
}

exports.minionsDelete = async (req, res, next) => {
    const name = req.query.name;
    db.query('DELETE FROM minions WHERE name = $1', [name], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).send(result);
        }
    });
}