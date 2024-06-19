const express= require("express");

const todoRoutes = require ("./routes/todoRoutes");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
//POST => /api/todos => criar um novo todo
app.use("/api", todoRoutes);

app.listen(PORT, () => {
    console.log("Server executando")
});
