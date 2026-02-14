import React from "react";
import { Avatar, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import StarRating from "./StarRating";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../state/customers/Review/review.action";

const ReviewCard = ({ review }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);
    const jwt = localStorage.getItem("jwt");

    const handleDeleteReview = () => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            dispatch(deleteReview({ reviewId: review.id, jwt }));
        }
    };

    const isAdmin = auth.user?.role === "ROLE_ADMIN" || auth.user?.role === "ROLE_RESTAURANT_OWNER";

    return (
        <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {review.customer?.fullName?.charAt(0).toUpperCase()}
                    </Avatar>
                }
                action={
                    isAdmin && (
                        <IconButton aria-label="settings" onClick={handleDeleteReview}>
                            <DeleteIcon color="error" />
                        </IconButton>
                    )
                }
                title={review.customer?.fullName}
                subheader={review.createdAt ? dayjs(review.createdAt).format("MMMM DD, YYYY") : ""}
            />
            <CardContent>
                <div className="flex items-center mb-2">
                    <StarRating rating={review.rating} isReadOnly={true} />
                </div>
                <p className="text-gray-600 font-medium text-sm">
                    {review.reviewText}
                </p>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
