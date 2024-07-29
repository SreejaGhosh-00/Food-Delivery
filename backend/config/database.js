import mongoose from 'mongoose'


export const connect = () => {
    mongoose.connect('mongodb+srv://ghoshsreeja88:2Ppa6TzTcskHaHve@cluster0.znexn5r.mongodb.net/Food_Delivery_Database', {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => { console.log("DB Connection Successfull") })
    .catch((error) => { 
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    })
}
