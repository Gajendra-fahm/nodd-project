const express = require("express")
const router = express.Router();
const getAllDataController = require("../controllers/getAllDataController");

router.get("/getalldata", (req,res) => {
    const data = getAllDataController();
    res.json(data)
})

module.exports = router
