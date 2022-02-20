

const jwt = require('jsonwebtoken');

const constants             = require('../properties/constants');
const authenticationService = require('../service/authentication');

let exportFunc = {
    authenticateUser: (req, res, next)=> {
      try{
        let token = req.headers && req.headers.authorization && req.headers.authorization.split("Bearer ")[1] || undefined;
        if(!token){
          return res.status(403).json({
            success:false,
            message: 'Session Expired. Please login again.'
          });
        }
        let decoded = jwt.verify(token, constants.JWT_KEY);
        if(!decoded.email){
          return res.status(401).json({
            success: false,
            message: "Invalid Token. Please login again"
          })
        }
        let email = decoded.email
        let index = constants.USERS.findIndex((x)=> {return x.email == email});
        if(index <= -1){
          return res.status(400).json({
            success: false,
            message: "Invalid User. Please try again later"
          })
        }  
        req.email = email;
        req.role = constants.USERS[index].role;
        next();
      }catch(err){
        return res.status(401).json({
          success: false,
          message: "Invalid Token. Please login again"
        })
      }
    }
}

module.exports = exportFunc;