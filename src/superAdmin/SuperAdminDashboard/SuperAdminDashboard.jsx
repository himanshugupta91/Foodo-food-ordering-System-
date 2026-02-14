import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { getCustomers, getPendingRestaurants } from "../../state/superAdmin/superAdmin.action";
import { getAllRestaurantsAction } from "../../state/customers/Restaurant/restaurant.action";
import PeopleIcon from '@mui/icons-material/People';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PendingIcon from '@mui/icons-material/Pending';

const SuperAdminDashboard = () => {
  const dispatch = useDispatch();
  const { superAdmin, restaurant } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    dispatch(getPendingRestaurants());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Super Admin Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="h6" className="opacity-75">Total Customers</Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {superAdmin.customers?.length || 0}
                  </Typography>
                </div>
                <PeopleIcon style={{ fontSize: 60, opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="h6" className="opacity-75">Total Restaurants</Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {restaurant.restaurants?.length || 0}
                  </Typography>
                </div>
                <RestaurantIcon style={{ fontSize: 60, opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="h6" className="opacity-75">Pending Requests</Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {superAdmin.pendingRestaurants?.length || 0}
                  </Typography>
                </div>
                <PendingIcon style={{ fontSize: 60, opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuperAdminDashboard;