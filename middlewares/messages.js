const associations = require("../associations.json");

const checkIfAssociationExists = (req, res, next) => {
  const slug = req.body.association

  const association = associations.find((association) => {
    return association.slug === slug;
  });

  if (association) {
    req.association = association;
    next();
  } else {
    res.status(404).json("NOT FOUND");
  }
};

module.exports = {
    checkIfAssociationExists,
};