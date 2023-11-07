// connect mongoose to the db
//install: npm i mongoose


const mongoose = require('mongoose');

let connectionString = `mongodb+srv://MainUser:${process.env.MONGO_PASS}@cluster0.hsafd6w.mongodb.net/?retryWrites=true&w=majority`


console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});