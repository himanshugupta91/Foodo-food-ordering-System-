import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenuItemsByRestaurantId } from "../../state/customers/Menu/menu.action";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import OrdersTable from "../Orders/OrderTable";
import MenuItemTable from "../Food/MenuItemTable";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const RestaurantDashboard = () => {
  const { id } = useParams();
  const { menu, restaurantsOrder } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, [dispatch, id]);

  const totalOrders = restaurantsOrder.orders?.length || 0;
  const totalMenuItems = menu.menuItems?.length || 0;
  const pendingOrders = restaurantsOrder.orders?.filter(o => o.orderStatus === "PENDING").length || 0;

  return (
    <div className="px-2 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Restaurant Dashboard</h1>

      {/* Stats Cards */}
      <Grid container spacing={3} className="mb-8">
        <Grid item xs={12} md={4}>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="h6" className="opacity-75">Total Orders</Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {totalOrders}
                  </Typography>
                </div>
                <ShoppingBagIcon style={{ fontSize: 60, opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="h6" className="opacity-75">Menu Items</Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {totalMenuItems}
                  </Typography>
                </div>
                <FastfoodIcon style={{ fontSize: 60, opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="h6" className="opacity-75">Pending Orders</Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {pendingOrders}
                  </Typography>
                </div>
                <AccessTimeIcon style={{ fontSize: 60, opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tables */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <OrdersTable name={"Recent Orders"} isDashboard={true} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <MenuItemTable isDashboard={true} name={"Recently Added Menu"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDashboard;
