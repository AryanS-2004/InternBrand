const express = require('express');
const auth = require("../middleware/authMiddleware");
const {getInternships, createInternships, applyInternship, withdrawInternship, updateBookmark} = require("../controller/internshipController");
const router = express.Router();

//These are protected routes

// router.route('/').get(auth, getInternships);
// router.route('/create').post(auth, createInternships);
// router.route('/apply/:id').post(auth, applyInternship);
// router.route('/withdraw/:id').delete(auth, withdrawInternship);

router.route('/').get( getInternships);
router.route('/create').post( createInternships);
router.route('/updateBookmark/:id').put(updateBookmark);
router.route('/apply/:id').post( applyInternship);
router.route('/withdraw/:id').delete( withdrawInternship);

module.exports = router;