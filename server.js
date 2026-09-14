const express = require("express");

const app = express();

const PORT = 3000;



async function getSensor(req, res){
   try {
    const response = await fetch(
      "https://api.openaq.org/v3/sensors/3917",
      {
        headers: {
          "X-API-Key": "d88af355ad5e14a485407095843b04dbf74f2beae0714b4b9de9eb0c42d20fa8",
        },
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
}

app.get("/sensor", getSensor);

app.get("/", (req, res) => {
  res.json({ enable: true });
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});