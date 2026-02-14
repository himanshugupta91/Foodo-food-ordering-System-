import "./App.css";
import Routers from "./routers/routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./state/authentication/Action";
import { findCart } from "./state/customers/Cart/cart.action";
import {
  getAllRestaurantsAction,
  getRestaurantByUserId,
} from "./state/customers/Restaurant/restaurant.action";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ToastProvider from "./components/ui/Toast";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(findCart(jwt));
      dispatch(getAllRestaurantsAction(jwt));
    }
  }, [auth.jwt, dispatch, jwt]);

  useEffect(() => {
    if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
      dispatch(getRestaurantByUserId(auth.jwt || jwt));
    }
  }, [auth.user, auth.jwt, dispatch, jwt]);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <Routers />
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
