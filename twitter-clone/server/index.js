const express = require('express');
const app = express();
const cors = require('cors');

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
        // insert into db
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        }
        console.log(mew);
    } else res.status(422);
        res.json(({
        message: 'Name and Content are required'
    }))
})

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})