import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../../components/ui/Table';
import { Modal, Card } from '../../components/ui/Modal';
import CreateCategory from './CreateCategory';

const Category = () => {
  const { restaurant } = useSelector(store => store);
  const [openCreateCategory, setOpenCreateCategory] = React.useState(false);
  const handleOpenCreateCategory = () => setOpenCreateCategory(true);
  const handleCloseCreateCategory = () => setOpenCreateCategory(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-neutral-900">Categories</h2>
            <p className="text-sm text-neutral-500 mt-1">Manage your food categories</p>
          </div>
          <button
            onClick={handleOpenCreateCategory}
            className="btn-primary flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Category</span>
          </button>
        </div>

        {/* Table */}
        {restaurant.categories && restaurant.categories.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell header>ID</TableCell>
                <TableCell header>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurant.categories.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">No categories yet</h3>
            <p className="text-neutral-600 mb-4">Create your first category to organize your menu</p>
            <button onClick={handleOpenCreateCategory} className="btn-primary">
              Add Your First Category
            </button>
          </div>
        )}
      </Card>

      {/* Create Category Modal */}
      <Modal
        open={openCreateCategory}
        onClose={handleCloseCreateCategory}
        title="Create Category"
        maxWidth="md"
      >
        <CreateCategory handleClose={handleCloseCreateCategory} />
      </Modal>
    </div>
  );
};

export default Category;