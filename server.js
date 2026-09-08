const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ enable: true });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});