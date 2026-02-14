import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ rating, handleRating, isReadOnly = false }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(
                <StarIcon
                    key={i}
                    className={`text-yellow-400 ${!isReadOnly ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
                    onClick={() => !isReadOnly && handleRating(i)}
                    sx={{ fontSize: "20px", color: "#fcd34d" }}
                />
            );
        } else if (rating >= i - 0.5) {
            stars.push(
                <StarHalfIcon
                    key={i}
                    className={`text-yellow-400 ${!isReadOnly ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
                    onClick={() => !isReadOnly && handleRating(i)}
                    sx={{ fontSize: "20px", color: "#fcd34d" }}
                />
            );
        } else {
            stars.push(
                <StarBorderIcon
                    key={i}
                    className={`text-gray-300 ${!isReadOnly ? "cursor-pointer hover:text-yellow-400 transition-colors" : ""}`}
                    onClick={() => !isReadOnly && handleRating(i)}
                    sx={{ fontSize: "20px", color: "#d1d5db" }}
                />
            );
        }
    }

    return <div className="flex items-center space-x-1">{stars}</div>;
};

export default StarRating;
