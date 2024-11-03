const express = require('express');
const serachRoutes = require('../src/routes/searchRoute');
const getallDataRoute = require("../src/routes/getAllDateRoute")

const searchByNameAndEmail = require("../src/routes/searchByNameAndEmailRoute")


const app = express();
const port = 5002;

app.use('/api', serachRoutes);

app.use("/api", getallDataRoute)
app.use("/api", searchByNameAndEmail)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
