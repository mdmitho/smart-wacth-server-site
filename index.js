const express = require('express')
const cors =require('cors')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.toutq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });







async function run(){
    try{
      await client.connect();
    const watchCollection = client.db("smart-watch").collection("all-product");

    app.get("/watch", async (req, res) => {
      const query = {};
      const cursor = watchCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });



    }
    finally{

    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
  res.send('Hello smart wacth website')
})

app.listen(port, () => {
  console.log(`my app listening on port ${port}`);
});
