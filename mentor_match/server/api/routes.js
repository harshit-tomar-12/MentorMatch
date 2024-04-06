const { Router } = require("express");
const user = require('./model/user');
const requestValidator = require('./middleware/requestValidator');
const userController = require('./controller/userController');
const {authenticateToken}=require('./middleware/authtoken');



const router = Router();

//...........
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './upload',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });
//..........

router.post(
  '/user/signup',
  
  // requestValidator.validateLoginDetail(),
  // requestValidator.validate,
  // upload.single('image'),
  userController.newProfile
);

router.put('/user/profile/upload/:email', upload.single('image'), userController.uploadProfileImage);

router.get('/user/profile/image/:email', userController.getProfileImage);

router.post("/user/login", userController.getOneProfiles);

router.put("/user/profile/update", userController.updateUserProfile);

router.put("/user/forgotPassword", userController.updateUserPassword);

router.delete("/user/profile/delete", userController.deleteUserProfile);

router.post("/user/generaldata",userController.getGeneralData);// giving name on login icon

router.post("/user/post/create", userController.createPost);

router.get("/user/posts/view", userController.viewPosts);

router.put("/user/post/like", userController.likePost);

router.put("/user/post/comment", userController.commentOnPost);

router.put("/user/post/comment/like", userController.likeComment);

router.put("/user/post/comment/comment", userController.commentOnComment);

router.put("/user/follow", userController.followUser);

router.put("/user/unfollow", userController.unfollowUser);

module.exports = router;
