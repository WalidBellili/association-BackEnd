const associations = require("../associations.json");

const checkIfExists = (req, res, next) => {
  const { slug } = req.params;

  const association = associations.find((association) => {
    return slug === association.slug;
  });

  if (association) {
    req.association = association;
    next();
  } else {
    res.status(404).json("association not found");
  }
};

module.exports = {
  checkIfExists,
};
