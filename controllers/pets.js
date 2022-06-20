const { response } = require("express");

const petGet = (req, res = response) => {
  res.json({
    msg: "get API - controller",
  });
};

const petPut = (req, res = response) => {
  res.json({
    msg: "put API - controller",
  });
};

const petPost = (req, res = response) => {
  res.json({
    msg: "post API - controller",
  });
};

const petPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};

const petDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

module.exports = {
  petGet,
  petPut,
  petPost,
  petPatch,
  petDelete,
};
