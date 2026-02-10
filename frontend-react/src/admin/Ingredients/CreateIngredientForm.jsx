import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../state/admin/Ingredients/Action';
import { Input, Select, Button } from '../../components/ui/Form';

const CreateIngredientForm = ({ handleClose }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth, restaurant, ingredients } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt");

  const [formData, setFormData] = useState({
    name: '',
    ingredientCategoryId: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = { ...formData, restaurantId: restaurant.usersRestaurant.id };
    dispatch(createIngredient({ jwt: auth.jwt || jwt, data }));
    setFormData({
      name: '',
      ingredientCategoryId: ''
    });
    handleClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const categoryOptions = ingredients.category.map(item => ({
    value: item.id,
    label: item.name
  }));

  return (
    <form className="space-y-5" onSubmit={handleFormSubmit}>
      <Input
        label="Ingredient Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="e.g., Tomatoes, Cheese, Lettuce"
        required
      />

      <Select
        label="Category"
        name="ingredientCategoryId"
        value={formData.ingredientCategoryId}
        onChange={handleInputChange}
        options={[
          { value: '', label: 'Select a category' },
          ...categoryOptions
        ]}
        required
      />

      <div className="flex items-center space-x-3 pt-4">
        <Button type="submit" variant="primary" className="flex-1">
          Create Ingredient
        </Button>
        <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CreateIngredientForm;
