
// let mongoClient = require("mongodb").MongoClient;

// let conString = "mongodb://127.0.0.1:27017";

// mongoClient.connect(conString,(err, clientObject)=>{
//     if(!err){
//         console.log("Connected Successfully..");
//     } else {
//         console.log(err);
//     }
// })

// import mongoose from "mongoose";

// const port = 5007;
// export const dbConnection = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017")
//     } catch (error) {
//         console.log(error);
//     }
// }

import mongoose from "mongoose";


const PORT = process.env.Port || 3000;

const start = async () => {
 

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo");
  } catch (err) {
    console.log(err);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();


