//Para la conexión sql

import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://jmatpon2010:<password>@ges-dwec.bfpkavj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(
//   uri
  //     {
  //   serverApi: {
  //     version: ServerApiVersion.v1,
  //     strict: true,
  //     deprecationErrors: true,
  //   }
  // }
// );

async function run(registro) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("Tarea2-Tema14");
    const datos = database.collection("Persona");

    // if (registro.nombre != "") await datos.insertOne(registro);
    const queryAll = datos.find();
    const allValues = await queryAll.toArray();
    console.log(allValues);
    return allValues;
  } catch (error) {
    console.log(error.message);
    // }
    // Connect the client to the server	(optional starting in v4.7)

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
