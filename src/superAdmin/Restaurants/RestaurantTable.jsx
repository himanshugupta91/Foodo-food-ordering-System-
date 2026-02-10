import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../state/customers/Restaurant/restaurant.action";
import { Table, TableHead, TableBody, TableRow, TableCell } from "../../components/ui/Table";
import { Card, LoadingSpinner } from "../../components/ui/Modal";

const RestaurantTable = ({ isDashboard, name }) => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
  }, [dispatch]);

  const displayedRestaurants = isDashboard
    ? restaurant.restaurants.slice(0, 7)
    : restaurant.restaurants;

  return (
    <div className="w-full">
      <Card>
        {/* Header */}
        <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
          {name || "Restaurants"}
        </h2>

        {/* Table */}
        {restaurant.loading ? (
          <LoadingSpinner />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell header>Banner</TableCell>
                <TableCell header>Name</TableCell>
                <TableCell header>Owner</TableCell>
                <TableCell header>Cuisine Type</TableCell>
                <TableCell header>Location</TableCell>
                {!isDashboard && <TableCell header>Contact</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRestaurants.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.imageUrl || "/default-restaurant.png"}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-neutral-900">{item.name}</span>
                      {item.brand && <span className="text-xs text-neutral-500">{item.brand}</span>}
                    </div>
                  </TableCell>
                  <TableCell>{item.owner?.fullName}</TableCell>
                  <TableCell>{item.cuisineType}</TableCell>
                  <TableCell>{item.address?.city}</TableCell>
                  {!isDashboard && (
                    <TableCell>{item.contactInformation?.email}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
};

export default RestaurantTable;