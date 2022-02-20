
const Joi       = require('joi');
const validator = require('../joiValidator');

exports.createPost = createPost;
exports.getPosts = getPosts;
exports.updatePost = updatePost;

function createPost(req, res, next){
  let schema = Joi.object().keys({
    name: Joi.string().max(250).required()
  });
  let validFields = validator.validateFields(req.body, res, schema);
  if (validFields) {
    next()
  }
}

function getPosts(req, res, next){
  let schema = Joi.object().keys({
    page: Joi.string().required()
  });
  let validFields = validator.validateFields(req.query, res, schema);
  if (validFields) {
    next()
  }
}


function updatePost(req, res, next){
  let schema = Joi.object().keys({
    name: Joi.string().max(250).required()
  });
  let validFields = validator.validateFields(req.body, res, schema);
  if (validFields) {
    next()
  }
}