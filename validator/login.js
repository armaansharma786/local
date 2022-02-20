


const Joi       = require('joi');
const validator = require('../joiValidator');

exports.loginUser = loginUser;

function loginUser(req, res, next){
  let schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
  let validFields = validator.validateFields(req.body, res, schema);
  if (validFields) {
    next()
  }
}