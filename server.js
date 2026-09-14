const express = require("express");

const app = express();

const PORT = 3000;

async function getComments(req, res){
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments');
    
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }
    
    const datos = await respuesta.json();
    res.send(datos)
  } catch (error) {
    console.error('Hubo un error con la red o los datos:', error);
  }
}

app.get("/", (req, res) => {
  res.json({ enable: true });
});

app.get("/comments", getComments)

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});