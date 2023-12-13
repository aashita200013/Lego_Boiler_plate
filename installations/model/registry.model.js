const mongoose = require("mongoose");

const subMenuSchema = new mongoose.Schema({
  subModuleName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  isSecure: {
    type: Boolean,
    required: true,
  },
});

const registrySchema = mongoose.Schema({
  moduleName: {
    type: String,
    required: true,
  },
  API: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  isSecure: {
    type: Boolean,
    required: true,
  },
  subModule: [subMenuSchema],
});

module.exports = mongoose.model("Registry", registrySchema);
