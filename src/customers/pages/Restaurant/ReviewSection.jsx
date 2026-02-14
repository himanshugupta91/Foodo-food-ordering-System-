import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, getReviewsByRestaurantId } from "../../../state/customers/Review/review.action";
import { Button, TextField } from "@mui/material";
import StarRating from "../../../components/Review/StarRating";
import ReviewCard from "../../../components/Review/ReviewCard";
import { LoadingSpinner } from "../../../components/ui/Modal";

const ReviewSection = () => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();
    const { review, auth } = useSelector((store) => store);
    const jwt = localStorage.getItem("jwt");

    useEffect(() => {
        dispatch(getReviewsByRestaurantId({ restaurantId: id }));
    }, [dispatch, id, review.reviews?.length]);
    // Dependency on review.reviews.length ensures list updates after creation/deletion

    const handleSubmit = () => {
        const data = {
            reviewText,
            rating,
            restaurantId: id,
        };
        dispatch(createReview({ reviewData: data, jwt }));
        setRating(0);
        setReviewText("");
    };

    return (
        <div className="mt-10 lg:mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">
                Reviews & Ratings
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Side: Create Review Form */}
                <div className="space-y-5">
                    <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-100">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Write a Review</h3>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-2">Rating</label>
                            <StarRating rating={rating} handleRating={setRating} />
                        </div>

                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Share your experience"
                            multiline
                            rows={4}
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            variant="outlined"
                            className="mb-4"
                        />

                        <Button
                            variant="contained"
                            disabled={!auth.user || rating === 0 || reviewText.trim() === ""}
                            onClick={handleSubmit}
                            sx={{
                                mt: 2,
                                bgcolor: "#e91e63",
                                "&:hover": { bgcolor: "#c2185b" }
                            }}
                        >
                            Submit Review
                        </Button>
                        {!auth.user && (
                            <p className="text-red-500 text-sm mt-2">Please login to write a review</p>
                        )}
                    </div>
                </div>

                {/* Right Side: Reviews List */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                        What people are saying ({review.reviews.length})
                    </h3>

                    {review.loading ? (
                        <LoadingSpinner />
                    ) : review.reviews.length > 0 ? (
                        <div className="max-h-[600px] overflow-y-auto pr-2 space-y-4">
                            {review.reviews.map((item) => (
                                <ReviewCard key={item.id} review={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
                            No reviews yet. Be the first to review!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
