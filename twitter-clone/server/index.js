const express = require('express');
const app = express();
const cors = require('cors');
const monk = require('monk');

const db = monk('localhost/meower');
// collection called mews inside db
const mews = db.get('mews');

app.use(cors());

// body parser middleware 
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Meower!'
    });
})

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' &&
        mew.content && mew.content.toString().trim() !== '';
}

app.post('/mews', (req, res) => {
    // console.log(req.body);
    if(isValidMew(req.body)) {
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        };
        // after validation, inserting user's input into db
        mews
        .insert(mew)
        .then(createdMew => {
            res.json(createdMew);
        });

    } else res.status(422);
        res.json(({
        message: 'Name and Content are required'
    })); return;
})

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})