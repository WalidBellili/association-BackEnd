const associations = require("../associations.json");

const checkIfExists = (req, res, next) => {
  const { slug } = req.params;

  const association = associations.find((association) => {
    return association.slug === slug;
  });

  if (association) {
    next();
  } else {
    res.status(404).json("NOT FOUND");
  }
};

module.exports = {
  checkIfExists,
};
