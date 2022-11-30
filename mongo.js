const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:Khang123@demo.xytevri.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('demo');
    const collection = db.collection('cars');
    //collection.insertOne({make:"Lexus",model:"RX350"});
    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);