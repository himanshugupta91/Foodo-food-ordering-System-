import { api } from "../../config/api";
import {
  GET_CUSTOMERS_FAILURE,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_PENDING_CUSTOMERS_FAILURE,
  GET_PENDING_CUSTOMERS_REQUEST,
  GET_PENDING_CUSTOMERS_SUCCESS,
  GET_PENDING_RESTAURANTS_REQUEST,
  GET_PENDING_RESTAURANTS_SUCCESS,
  GET_PENDING_RESTAURANTS_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
} from "./superAdmin.actionType";

export const getCustomers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CUSTOMERS_REQUEST });
    try {
      const { data } = await api.get("api/customers");
      dispatch({ type: GET_CUSTOMERS_SUCCESS, payload: data });
      console.log("created restaurant ", data);
    } catch (error) {
      dispatch({ type: GET_CUSTOMERS_FAILURE, error: error.message });
    }
  };
};

export const getPendingCustomers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PENDING_CUSTOMERS_REQUEST });
    try {
      const { data } = await api.get("api/pending-customers");
      dispatch({ type: GET_PENDING_CUSTOMERS_SUCCESS, payload: data });
      console.log("created restaurant ", data);
    } catch (error) {
      dispatch({ type: GET_PENDING_CUSTOMERS_FAILURE, error: error.message });
    }
  };
};

export const getPendingRestaurants = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PENDING_RESTAURANTS_REQUEST });
    try {
      const { data } = await api.get("/api/admin/restaurants?status=PENDING"); // Assumption: Backend supports filtering by status or it's a specific endpoint
      // If the backend doesn't support query params for status on /api/admin/restaurants, we might need a specific endpoint like /api/admin/restaurants/pending
      // Let's assume the standard RESTful filter Pattern or check if there's an existing pattern. 
      // Based on typical spring boot, maybe just get all and filter? But let's try to hit an endpoint that likely exists or use the general get.
      // Actually, let's use the same endpoint as getAllRestaurants but look for a param, or if I recall getAllRestaurants was just /api/restaurants. 
      // Ideally, super admin should have a route. Let's try /api/admin/restaurants with status.
      dispatch({ type: GET_PENDING_RESTAURANTS_SUCCESS, payload: data });
      console.log("pending restaurants ", data);
    } catch (error) {
      // Fallback or error handling
      console.log("Error fetching pending restaurants", error);
      dispatch({ type: GET_PENDING_RESTAURANTS_FAILURE, error: error.message });
    }
  };
};

export const deleteRestaurant = (restaurantId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });
    try {
      await api.delete(`/api/admin/restaurants/${restaurantId}`);
      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
      console.log("deleted restaurant ", restaurantId);
    } catch (error) {
      console.log("Error deleting restaurant", error);
      dispatch({ type: DELETE_RESTAURANT_FAILURE, error: error.message });
    }
  };
};

export const updateRestaurantStatus = ({ restaurantId, status }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const response = await api.put(
        `/api/admin/restaurants/${restaurantId}/status`,
        {},
      );
      console.log("update restaurant status ", response.data);
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("error ", error);
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, error: error.message });
    }
  };
};