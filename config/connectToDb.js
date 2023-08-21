import mongoose from 'mongoose';

// const connection = {};



async function connect() {

    // if (connection.isConnected) {
    //     console.log('already connected.')
    //     return;
    // }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
    
}

// async function disconnect() {
//     if (connection.isConnected) {
//         if (process.env.NODE_ENV === 'production') {
//             await mongoose.disconnect();
//             connection.isConnected = false;
//         }
//     }
// }
//const db = { connect, disconnect };
const db = { connect };
export default db;
