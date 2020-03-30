module.exports = (sequelize, Sequelize) => {
    const Driver = sequelize.define("driver", {
      full_name: {
        type: Sequelize.STRING
      },
    
      phone_number: {
        type: Sequelize.STRING
      }
    });
  
    return Driver;
  };
  