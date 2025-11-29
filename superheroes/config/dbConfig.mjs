import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conectado a MongoDB');
    }catch(error){
        console.error('error de conexión:', error);
        process.exit(1); // Salir del proceso con un código de error
    }
}

