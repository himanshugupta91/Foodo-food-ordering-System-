import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStockOfIngredient,
} from "../../state/admin/Ingredients/Action";
import { Table, TableHead, TableBody, TableRow, TableCell } from '../../components/ui/Table';
import { Modal, Card } from '../../components/ui/Modal';
import CreateIngredientCategoryForm from "./CreateIngredientCategory";
import CreateIngredientForm from "./CreateIngredientForm";

const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [openIngredientCategory, setOpenIngredientCategory] = useState(false);
  const handleOpenIngredientCategory = () => setOpenIngredientCategory(true);
  const handleCloseIngredientCategory = () => setOpenIngredientCategory(false);

  const [openIngredient, setOpenIngredient] = useState(false);
  const handleOpenIngredient = () => setOpenIngredient(true);
  const handleCloseIngredient = () => setOpenIngredient(false);

  const handleUpdateStock = (id) => {
    dispatch(updateStockOfIngredient({ id, jwt }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ingredients Table */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-neutral-900">Ingredients</h2>
                <p className="text-sm text-neutral-500 mt-1">Manage your ingredient inventory</p>
              </div>
              <button onClick={handleOpenIngredient} className="btn-primary flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add Ingredient</span>
              </button>
            </div>

            <div className="max-h-[600px] overflow-y-auto">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell header>ID</TableCell>
                    <TableCell header>Name</TableCell>
                    <TableCell header>Category</TableCell>
                    <TableCell header>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingredients.ingredients.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category.name}</TableCell>
                      <TableCell>
                        <button
                          onClick={() => handleUpdateStock(item.id)}
                          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${item.inStoke
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                            }`}
                        >
                          {item.inStoke ? "In Stock" : "Out of Stock"}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Ingredient Categories */}
        <div>
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-xl font-bold text-neutral-900">Categories</h2>
                <p className="text-sm text-neutral-500 mt-1">Ingredient categories</p>
              </div>
              <button onClick={handleOpenIngredientCategory} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell header>ID</TableCell>
                  <TableCell header>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ingredients.category?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={openIngredient}
        onClose={handleCloseIngredient}
        title="Create Ingredient"
        maxWidth="md"
      >
        <CreateIngredientForm handleClose={handleCloseIngredient} />
      </Modal>

      <Modal
        open={openIngredientCategory}
        onClose={handleCloseIngredientCategory}
        title="Create Ingredient Category"
        maxWidth="md"
      >
        <CreateIngredientCategoryForm
          handleClose={handleCloseIngredientCategory}
        />
      </Modal>
    </div>
  );
};

export default Ingredients;
