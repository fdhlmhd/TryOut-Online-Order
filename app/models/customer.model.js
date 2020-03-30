module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    full_name: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone_number: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};
