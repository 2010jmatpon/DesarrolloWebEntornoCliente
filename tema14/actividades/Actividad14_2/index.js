import express from "express";
import path from 'path';

import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://jmatpon2010:<pass>@ges-dwec.bfpkavj.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const router = express.Router();
var __dirname = path.resolve(); 

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.use(express.json());

router.post("/ajax", async function (req, res) {
  console.log(req.body);
  const registro ={
    nombre: req.body.nombre,
    apellido: req.body.apellido
  }
  const result = await run(registro);
  res.json(result);
});

async function run(registro) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("Tarea2-Tema14");
    const datos = database.collection("Persona");

    if (registro.nombre != "") await datos.insertOne(registro);
    const queryAll = datos.find();
    const allValues = await queryAll.toArray();
    console.log(allValues);
    return allValues;
  } catch (error) {
    console.log(error.message);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.use("/", router);
app.listen(3000);
console.log("Escuchando en puerto 3000");
