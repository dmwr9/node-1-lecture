const express = require('express');

const app = express();

// ! Top Level Middleware
app.use(express.json());

const port = 4040;

app.listen(port, () => console.log(`Server running on port ${port}`))