const mongoose = require('mongoose');
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@gabootcamp.z41ps.mongodb.net/Tasks?retryWrites=true&w=majority
const connectDB = async() => {
try{

    const con = await mongoose.connect(process.env.MONGO_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
// useFindAndModify: false,
// useCreateIndex: true
    })

console.log(`mongoDB connected`);
}catch(err) {
    console.log(err);
    process.exit(1);
}
}

module.exports = connectDB
