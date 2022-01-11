const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const boardingSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    address: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Boarding = model('Boarding', boardingSchema);

module.exports = Boarding;