const Joi = require("joi");

const validateConnection = (data) => {
  return Joi.object({
    user: Joi.string().email().max(255).presence("required"),
    password: Joi.string().max(255).presence("required"),
  }).validate(data, { abortEarly: false }).error;
};

module.exports = validateConnection;
