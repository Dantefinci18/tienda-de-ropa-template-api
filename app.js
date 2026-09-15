const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API funcionando"
    });
});


app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`);
});