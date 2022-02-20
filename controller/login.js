
const constants = require('../properties/constants');
const authenticationService = require('../service/authentication');

let exportFunction = {
    loginUser: async(req, res)=> {
      try{
        let {email, password} = req.body;
        let index = constants.USERS.findIndex((x)=> {
          return x.email == email
        });
        if(index <= -1){
          return res.status(400).json({
            success: false,
            message: "Invalid Email. Please try with valid email"
          })
        }
        if(password != constants.USERS[index].pass){
          return res.status(400).json({
            success: false,
            message: "Invalid Password. Please try with valid password"
          })
        }   
        let token = authenticationService.generateToken(email);
        console.log(token);
        return res.json({
          success: true,
          message: "Login successfully",
          data: token  
        })
      }catch(err){
        res.status(500).json({
          success: false,
          message: "Something went wrong while login. Please try again",
          debug: err.stack  
        })  
      }
    }
}

module.exports = exportFunction;

