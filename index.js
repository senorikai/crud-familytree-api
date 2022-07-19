const express = require('express');
const app = express();
const familytree = require('./controller/FamilyTree');
const port = 3231;


app.use(express.json());
app.use(familytree)


app.listen(port, () => {
    console.log('server listening at port 3000.')
})


