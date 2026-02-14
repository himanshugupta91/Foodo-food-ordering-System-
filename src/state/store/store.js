import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "../authentication/Reducer";
import restaurantReducer from "../customers/Restaurant/Reducer";
import menuItemReducer from "../customers/Menu/Reducer";
import cartReducer from "../customers/Cart/Reducer";
import { orderReducer } from "../customers/Orders/order.reducer";
import restaurantsOrderReducer from "../admin/Order/restaurants.order.reducer";
import superAdminReducer from "../superAdmin/superAdmin.reducer";
import { ingredientReducer } from "../admin/Ingredients/Reducer";
import { reviewReducer } from "../customers/Review/review.reducer";



const rootReducer = combineReducers({

    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,

    // admin
    restaurantsOrder: restaurantsOrderReducer,
    ingredients: ingredientReducer,

    // super admin
    superAdmin: superAdminReducer,

    // Review
    review: reviewReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))