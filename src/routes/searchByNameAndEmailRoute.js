const express = require("express");
const router = express.Router();
const searchByNameAndEmail = require("../controllers/searchByNameAndEmailController")

router.get("/search", (req, res) => {
    const {name, email} = req.query;

    const data = searchByNameAndEmail();
    console.log("data", data);

    if(!name && !email) {
        return res.json(data)
    }

    let filetedUsers = [...data]
    if(name){
        filetedUsers = filetedUsers.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
    }
    if(email){
        filetedUsers = filetedUsers.filter((user) => user.email.toLowerCase().includes(email.toLowerCase()));
    }

    return res.json(filetedUsers)
})

module.exports = router