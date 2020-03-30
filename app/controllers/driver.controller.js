const db = require("../models");
const Driver = db.drivers;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.full_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const driver = {
    full_name: req.body.full_name,
    phone_number: req.body.phone_number
  };

  // Save Tutorial in the database
  Driver.create(driver)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Driver."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const full_name = req.query.full_name;
  var condition = full_name ? { full_name: { [Op.iLike]: `%${full_name}%` } } : null;

  Driver.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Driver."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Driver.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Driver with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Driver.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Driver was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Driver with id=${id}. Maybe Driver was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Driver with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Driver.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Driver was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Driver with id=" + id
      });
    });
};
