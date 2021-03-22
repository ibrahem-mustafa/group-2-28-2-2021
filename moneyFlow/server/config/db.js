const mongoose = require('mongoose');

const connectToDB = async () => {
   try {
       await mongoose.connect("mongodb://localhost:27017/moneyFlows", {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       });
       console.log("Connected To DB");
   } catch(err) {
       console.log('Connect DB Failed')
   }
}

module.exports = connectToDB