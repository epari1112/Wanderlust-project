const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapasync");
const ExpressError = require("../utils/ExpressError");
const Review = require("../Models/review");
const Listing = require("../Models/listing");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");



router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync( reviewController.destroyReview));

module.exports = router;
  