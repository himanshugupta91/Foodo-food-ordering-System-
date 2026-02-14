import {
    CREATE_REVIEW_FAILURE,
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAILURE,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    GET_REVIEWS_FAILURE,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
} from "./review.actionType";

const initialState = {
    reviews: [],
    loading: false,
    error: null,
};

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
        case GET_REVIEWS_REQUEST:
        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: [action.payload, ...state.reviews],
            };

        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: action.payload,
            };

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: state.reviews.filter((item) => item.id !== action.payload),
            };

        case CREATE_REVIEW_FAILURE:
        case GET_REVIEWS_FAILURE:
        case DELETE_REVIEW_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
