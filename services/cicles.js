import { db } from "../main.js";
import { collection, addDoc } from "firebase/firestore";

async function createCicle(req, res) {
  const ciclesRef = collection(db, "cicles");
  const data = {
    name: req.body.name,
    time: req.body.time,
  };
  console.log("cicles", ciclesRef);
  const newCicle = await addDoc(ciclesRef, data);

  console.log("Servicio guardado con éxito en Firebase.", newCicle.id);

  res.send({ msg: "data added" });
}

export default createCicle;
