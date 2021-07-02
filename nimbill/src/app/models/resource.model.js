module.exports = (sequelize, Sequelize) => {
    const Resource = sequelize.define("resource", {
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      resourceCost: { type: Sequelize.INTEGER },
      position: { type: Sequelize.STRING },
      specialties: { type: Sequelize.STRING },
      nearshoreOffShore: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
    });
    return Resource;
  };