import express from "express";
import router from "./routes/router.js";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());
app.use(router);

app.listen(4000, function () {
  console.log("El servidor está levantado: http://localhost:4000/");
});
