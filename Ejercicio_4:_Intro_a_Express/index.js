import express from "express";
import router from "./router/router.js";
const port = 3000;
//crear una instancia de la applicacion express
const app = express ();
app.use(express.json());
app.use(router);
app.listen(port);
console.log(`Corriendo mi servidor en http://localhost: ${port}`);
