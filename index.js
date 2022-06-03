const express = require('express')
const cors =require('cors')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://smart-watch:<password>@cluster0.toutq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});












app.get('/', (req, res) => {
  res.send('Hello smart wacth website')
})

app.listen(port, () => {
  console.log(`my app listening on port ${port}`);
});
