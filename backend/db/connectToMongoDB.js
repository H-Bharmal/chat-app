import mongoose from "mongoose";
const mongouri ="mongodb+srv://dbashir84:65iQuZc35Re0EvgV@cluster0.rzuo3sm.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(mongouri );
        console.log("Connected to mongoDB");
    }
    catch(error){
        console.log("Error connecting to mongo db",error.message);
    }
}

export default connectToMongoDB;