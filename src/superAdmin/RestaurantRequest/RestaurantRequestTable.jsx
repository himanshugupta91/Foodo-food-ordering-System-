import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableHead, TableBody, TableRow, TableCell } from "../../components/ui/Table";
import { Card, LoadingSpinner } from "../../components/ui/Modal";

const RestaurantRequestTable = ({ isDashboard, name }) => {
  const dispatch = useDispatch();
  const { menu } = useSelector((store) => store);

  useEffect(() => {
    // Dispatch action if needed
  }, []);

  const handleDeleteProduct = (productId) => {
    console.log("delete product ", productId);
  };

  const displayedItems = isDashboard
    ? menu.menuItems.slice(0, 7)
    : menu.menuItems;

  return (
    <div className="w-full">
      <Card>
        {/* Header */}
        <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
          {name || "Restaurant Requests"}
        </h2>

        {/* Table */}
        {menu.loading ? (
          <LoadingSpinner />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell header>Image</TableCell>
                <TableCell header>Title</TableCell>
                <TableCell header>Category</TableCell>
                <TableCell header>Price</TableCell>
                <TableCell header>Quantity</TableCell>
                {!isDashboard && <TableCell header>Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.imageUrl || "/default-food.png"}
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
                  <TableCell>{item.category?.name}</TableCell>
                  <TableCell>₹{item.price}</TableCell>
                  <TableCell>{item.quantity || 10}</TableCell>
                  {!isDashboard && (
                    <TableCell>
                      <button
                        onClick={() => handleDeleteProduct(item._id)}
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        Delete
                      </button>
                    </TableCell>
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

export default RestaurantRequestTable;