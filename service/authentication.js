

const jwt = require('jsonwebtoken');
const constants = require('../properties/constants');

let exportFunc = {
  generateToken: (email)=> {
    let token = jwt.sign({ email: email }, constants.JWT_KEY);
    return token
  },
  verifyToken: (token)=> {
    try{

    }catch(err){
      
    }
    console.log("token", token)
    let decoded = jwt.verify(token, constants.JWT_KEY);
    console.log("doecodee---->", decoded);
    return decoded.email;   
  }
}

module.exports = exportFunc;
