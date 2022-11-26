import mongoose from "mongoose";

const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.3b86imx.mongodb.net/mernstack?retryWrites=true&w=majority`;
  try{
    await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
    console.log("Database Connection Successfully");
  }
  catch(error){
    console.log("Error While Connecting With The  Database ",error);
  }
}

export default Connection;