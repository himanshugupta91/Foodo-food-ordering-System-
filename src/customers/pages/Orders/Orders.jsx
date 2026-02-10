import React, { useEffect } from 'react';
import OrderCard from '../../components/Order/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../../../state/customers/Orders/Action';

const Orders = () => {
  const { order, auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getUsersOrders(jwt));
  }, [auth.jwt, dispatch, jwt]);

  return (
    <div className="animate-fade-in">
      <h2 className="font-display text-3xl font-bold text-neutral-800 mb-6">
        My Orders
      </h2>

      {order.orders && order.orders.length > 0 ? (
        <div className="space-y-6">
          {order.orders.map((orderItem, index) =>
            orderItem.items.map((item, itemIndex) => (
              <div
                key={`${index}-${itemIndex}`}
                className="animate-slide-up"
                style={{ animationDelay: `${(index + itemIndex) * 50}ms` }}
              >
                <OrderCard status={orderItem.orderStatus} order={item} />
              </div>
            ))
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-2">
            No orders yet
          </h3>
          <p className="text-neutral-600 mb-6">
            Start ordering delicious food from your favorite restaurants!
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Browse Restaurants
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;