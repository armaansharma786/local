
let posts = [];

const constants = require('../properties/constants');

let exportFunction = {
  createPost: (req, res)=> {
    try{
      let role = req.role;
      let name = req.body.name;
      if(role != constants.ROLES.ADMIN){
        return res.status(401).json({
          success: false,
          message: "You are not authorized to perform this action" 
        }) 
      } 
      let id = 1;
      if(posts.length){
        let lastPost = JSON.parse(JSON.stringify(posts.slice(-1)[0]));
        id = lastPost.id + 1; 
      }
      posts.push({id, name});
      res.json({
        success: true,
        message: "Post created successfully" 
      })
    }catch(err){
      res.status(500).json({
        success: false,
        message: "Something went wrong while creating post. Please try again later",
        debug: err.stack 
      })
    }
  },
  getPosts: (req, res)=> {
    try{
      let page = +req.query.page || 1;
      let page_size = 10;
      let start = (page - 1 ) * 10;
      let response = posts.slice(start, page_size);
      return res.json({
        success: true,
        message: "Posts fetched successfully",
        data: response
      })
    }catch(err){
     res.status(500).json({
       success: false,
       message: "Something went wrong while fetching post. Please try again later",
       debug: err.stack 
     })
    }
  },
  updatePost: (req, res)=> {
    try{
      let post_id = req.params.post_id;
      let name    = req.body.name;  
      let index = posts.findIndex((x)=> {
        return x.id == post_id
      })
      if(index <= -1){
        return res.status(400).json({
          success: false,
          message: "Invalid Post Id in request"
        })
      }
      posts[index].name = name;
      return res.json({
        success: true,
        message: "Post Updated SuccessFully"
      })
    }catch(err){
     res.status(500).json({
       success: false,
       message: "Something went wrong while creating post. Please try again later",
       debug: err.stack 
     })
    }
  },
  deletePost: (req, res)=> {
    try{
      let role = req.role;
      let post_id = req.params.post_id;

      if(role != constants.ROLES.ADMIN){
        return res.status(401).json({
          success: false,
          message: "You are not authorized to perform this action" 
        }) 
      } 
      let index = posts.findIndex((x)=> {
        return x.id == post_id
      })
      if(index <= -1){
        return res.status(400).json({
          success: false,
          message: "Invalid Post Id in request"
        })
      }
      posts.splice(index, 1);
      res.json({
        success: true,
        message: "Post Deleted SuccessFully"
      })
    
    }catch(err){
      res.status(500).json({
        success: false,
        message: "Something went wrong while deleting post. Please try again later",
        debug: err.stack 
      })
    }
  }
}

module.exports = exportFunction