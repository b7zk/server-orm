const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //rutas
    this.petsPath = "/pets";

    //*middlewares
    this.middlewares();

    //*rutas
    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.static("public")); //directorio publico
  }

  routes() {
    this.app.use(this.petsPath, require("../routes/pets"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running at:", this.port);
    });
  }
}

//exportar la clase
module.exports = Server;
