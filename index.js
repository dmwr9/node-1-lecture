const express = require('express');
// express docs: http://expressjs.com/en/api.html
const app = express();

// ! Top Level Middleware
app.use(express.json());

const port = 4040;

// Dummy data
const users = [{id: 1, name: 'Cole'}, {id:2, name: 'Ben'}, {id:3, name: 'Fred Flinstone'}]

// * General request for all data
app.get('/api/users',(req, res) => {
    res.status(200).send(users)
});
// * Using params to request one specific piece of data
app.get('/api/users/:id', (req, res) => {
    console.log(req.params)
    let banana = users.find(elem => elem.id === +req.params.id)
    if(!banana){
        res.status(404).send("Invalid user id")
    } else {
        res.status(200).send(banana)
    }
})
// * Using query to request a specific piece of data
// ? 'http://localhost:4040/api/user?name=Cole'
app.get('/api/user', (req, res) => {
    console.log(req.query)
    let papaya = users.find(elem => elem.name === req.query.name)
    res.status(200).send(papaya)
})

app.listen(port, () => console.log(`Server running on port ${port}`))