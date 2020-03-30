module.exports = app => {
    const drivers = require("../controllers/driver.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", drivers.create);
  
    // Retrieve all Tutorials
    router.get("/", drivers.findAll);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", drivers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", drivers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", drivers.delete);
  
  
    app.use("/api/drivers", router);
  };
  