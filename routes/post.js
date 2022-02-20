


const express      = require('express');
const router       = express.Router();

const postValidator = require('../validator/post');
const postController = require('../controller/post');
const middleware = require('../middleware/checkAuth');



router.post('/', postValidator.createPost, middleware.authenticateUser, postController.createPost);
router.get('/', postValidator.getPosts, middleware.authenticateUser, postController.getPosts);
router.put('/:post_id', middleware.authenticateUser, postController.updatePost);
router.delete('/:post_id', middleware.authenticateUser, postController.deletePost);


module.exports = router;