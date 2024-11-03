const express = require("express");
const data = require("./Data");

const app  = express();
const port =9005

app.get("/user", (req,res)=>{
    res.json(data)
});

//search api,  search by name 
// app.get("/user/search", (req, res) => {
//     const { name } = req.query;
//     if (!name) {
//         return res.status(400).json({ error: "Name parameter is required" });
//     }

//     const filteredUsers = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));

//     res.json(filteredUsers);
// });

// app.get("/user/search", (req, res) => {
//     const { name } = req.query;

//     // If no name parameter is provided, return all data
//     if (!name) {
//         return res.json(data);
//     }

//     // Filter users by name if name parameter is provided
//     const filteredUsers = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    
//     res.json(filteredUsers);
// });

app.get("/user/search", (req, res) => {
    const { name, email } = req.query;

    // If neither name nor email parameter is provided, return all data
    if (!name && !email) {
        return res.json(data);
    }

    // Filter users by name and/or email if parameters are provided
    let filteredUsers = [...data];

    if (name) { 
        filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (email) {
        filteredUsers = filteredUsers.filter(user => user.email.toLowerCase().includes(email.toLowerCase()));
    }
    
    res.json(filteredUsers);
});


app.get("/user/search/:id", (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);

    // Find the user with the provided ID
    const user = data.find(user => user.id === userId);

    // If user is not found, send a 404 response
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // If user is found, send the user data in the response
    res.json(user);
});


app.listen(port, console.log("http://127.0.0.1:9005"))