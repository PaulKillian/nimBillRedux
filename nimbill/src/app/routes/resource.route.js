module.exports = app => {
    const resource = require("../controllers/resource.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", resource.create);
  
    // Retrieve all resource
    router.get("/", resource.findAll);
  
    // Retrieve all published resource
    router.get("/published", resource.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", resource.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", resource.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", resource.delete);
  
    // Create a new Tutorial
    router.delete("/", resource.deleteAll);
  
    app.use('/api/resource', router);
  };