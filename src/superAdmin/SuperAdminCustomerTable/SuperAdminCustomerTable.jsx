import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../state/superAdmin/superAdmin.action";
import { Table, TableHead, TableBody, TableRow, TableCell } from "../../components/ui/Table";
import { Card, LoadingSpinner } from "../../components/ui/Modal";

const SuperAdminCustomerTable = ({ isDashboard, name }) => {
  const dispatch = useDispatch();
  const { superAdmin } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const displayedCustomers = isDashboard
    ? superAdmin.customers.slice(0, 7)
    : superAdmin.customers;

  return (
    <div className="w-full">
      <Card>
        {/* Header */}
        <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
          {name || "Customers"}
        </h2>

        {/* Table */}
        {superAdmin.loading ? (
          <LoadingSpinner />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell header>Image</TableCell>
                <TableCell header>Full Name</TableCell>
                <TableCell header>User ID</TableCell>
                <TableCell header>Email</TableCell>
                <TableCell header>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedCustomers.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.imageUrl || "/default-avatar.png"}
                      alt={item.fullName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-neutral-900">{item.fullName}</span>
                      {item.brand && <span className="text-xs text-neutral-500">{item.brand}</span>}
                    </div>
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <span className="badge">{item.role}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
};

export default SuperAdminCustomerTable;