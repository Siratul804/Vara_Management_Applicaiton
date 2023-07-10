const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  varaitiyaName: {
    type: String,
  },
  floor: {
    type: String,
  },
  month: {
    type: String,
  },
  flat: {
    type: String,
  },
  electricity: {
    type: String,
  },
  gas: {
    type: String,
  },
  garbage: {
    type: String,
  },
  light: {
    type: String,
  },

  description: {
    type: String,
  },
  total: {
    type: String,
  },
});

module.exports = mongoose.model("vara", crudSchema);
