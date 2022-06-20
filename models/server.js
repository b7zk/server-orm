const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //*middlewares
    this.middlewares();

    //*rutas
    this.routes();
  }

  middlewares() {
    this.app.use(express.static("public")); //directorio publico
  }

  routes() {
    this.app.get("/api", function (req, res) {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running at:", this.port);
    });
  }
}

//exportar la clase
module.exports = Server;
