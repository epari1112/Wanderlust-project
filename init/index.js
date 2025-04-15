const mongoose = require("mongoose");
const initdata = require("./data");
const listing = require("../Models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";
main()
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
      ...obj, 
       owner: "67c57948286da2549611ae26" }));
    await listing.insertMany(initdata.data);
    console.log("data was initialized");

}
initDB();
