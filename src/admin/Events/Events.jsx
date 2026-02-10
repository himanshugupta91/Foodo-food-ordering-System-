import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEventAction,
  getRestaurnatsEvents,
} from "../../state/customers/Restaurant/restaurant.action";
import dayjs from "dayjs";
import EventCard from "./EventCard";
import { Modal } from "../../components/ui/Modal";
import { Input, Button } from "../../components/ui/Form";

const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null,
};

const Events = () => {
  const dispatch = useDispatch();
  const { restaurant, auth } = useSelector((store) => store);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  const jwt = localStorage.getItem("jwt");

  const [formValues, setFormValues] = useState(initialValues);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e, dateType) => {
    setFormValues({ ...formValues, [dateType]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createEventAction({
        data: formValues,
        restaurantId: restaurant.usersRestaurant?.id,
        jwt,
      })
    );
    setFormValues(initialValues);
    handleCloseModal();
  };

  useEffect(() => {
    if (restaurant.usersRestaurant) {
      dispatch(
        getRestaurnatsEvents({
          restaurantId: restaurant.usersRestaurant?.id,
          jwt: auth.jwt || jwt,
        })
      );
    }
  }, [restaurant.usersRestaurant]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-neutral-900">Events</h2>
          <p className="text-sm text-neutral-500 mt-1">Manage your restaurant events</p>
        </div>
        <button onClick={handleOpenModal} className="btn-primary">
          Create New Event
        </button>
      </div>

      {/* Events Grid */}
      {restaurant.restaurantsEvents && restaurant.restaurantsEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurant.restaurantsEvents.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl">
          <svg className="w-16 h-16 mx-auto mb-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">No events yet</h3>
          <p className="text-neutral-600 mb-4">Create your first event to engage with customers</p>
          <button onClick={handleOpenModal} className="btn-primary">
            Create First Event
          </button>
        </div>
      )}

      {/* Create Event Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        title="Create New Event"
        maxWidth="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="image"
            label="Image URL"
            value={formValues.image}
            onChange={handleFormChange}
            placeholder="https://example.com/image.jpg"
            required
          />

          <Input
            name="location"
            label="Location"
            value={formValues.location}
            onChange={handleFormChange}
            placeholder="Event location"
            required
          />

          <Input
            name="name"
            label="Event Name"
            value={formValues.name}
            onChange={handleFormChange}
            placeholder="Name of the event"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="startedAt"
              label="Start Date & Time"
              type="datetime-local"
              value={formValues.startedAt}
              onChange={(e) => handleDateChange(e, "startedAt")}
              required
            />

            <Input
              name="endsAt"
              label="End Date & Time"
              type="datetime-local"
              value={formValues.endsAt}
              onChange={(e) => handleDateChange(e, "endsAt")}
              required
            />
          </div>

          <div className="flex items-center space-x-3 pt-4">
            <Button type="submit" variant="primary" className="flex-1">
              Create Event
            </Button>
            <Button type="button" variant="outline" onClick={handleCloseModal} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Events;
