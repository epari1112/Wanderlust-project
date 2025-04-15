const Review = require("../Models/review");
const Listing = require("../Models/listing");

module.exports.createReview = async (req, res) => {
      let listing = await Listing.findById(req.params.id);   // post route for reviews
      let newReview = new Review(req.body.review);
      newReview.author = req.user._id;
      listing.reviews.push(newReview);
      await newReview.save();
      await listing.save();
      req.flash("success", "Successfully added a new review!");
      res.redirect(`/listings/${listing._id}`);
    };

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); //delete route for reviews
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted a review!");
    res.redirect(`/listings/${id}`);
  };
