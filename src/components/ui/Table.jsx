// Reusable Table Component
import React from "react";

export const Table = ({ children, className = "" }) => {
    return (
        <div className="overflow-x-auto">
            <table className={`min-w-full divide-y divide-neutral-200 ${className}`}>
                {children}
            </table>
        </div>
    );
};

export const TableHead = ({ children, className = "" }) => {
    return (
        <thead className={`bg-neutral-50 ${className}`}>
            {children}
        </thead>
    );
};

export const TableBody = ({ children, className = "" }) => {
    return (
        <tbody className={`bg-white divide-y divide-neutral-200 ${className}`}>
            {children}
        </tbody>
    );
};

export const TableRow = ({ children, className = "", onClick }) => {
    return (
        <tr
            className={`hover:bg-neutral-50 transition-colors ${onClick ? 'cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </tr>
    );
};

export const TableCell = ({ children, className = "", header = false }) => {
    const Component = header ? 'th' : 'td';
    const baseClasses = header
        ? "px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
        : "px-6 py-4 whitespace-nowrap text-sm text-neutral-900";

    return (
        <Component className={`${baseClasses} ${className}`}>
            {children}
        </Component>
    );
};

// Action buttons for tables
export const TableActions = ({ onEdit, onDelete, onView }) => {
    return (
        <div className="flex items-center space-x-2">
            {onView && (
                <button
                    onClick={onView}
                    className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                    title="View"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
            )}
            {onEdit && (
                <button
                    onClick={onEdit}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
            )}
            {onDelete && (
                <button
                    onClick={onDelete}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            )}
        </div>
    );
};

// Status Badge
export const StatusBadge = ({ status }) => {
    const statusConfig = {
        PENDING: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' },
        COMPLETED: { bg: 'bg-green-100', text: 'text-green-800', label: 'Completed' },
        OUT_FOR_DELIVERY: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Out for Delivery' },
        DELIVERED: { bg: 'bg-green-100', text: 'text-green-800', label: 'Delivered' },
        CANCELLED: { bg: 'bg-red-100', text: 'text-red-800', label: 'Cancelled' },
        ACTIVE: { bg: 'bg-green-100', text: 'text-green-800', label: 'Active' },
        INACTIVE: { bg: 'bg-neutral-100', text: 'text-neutral-800', label: 'Inactive' },
    };

    const config = statusConfig[status] || statusConfig.PENDING;

    return (
        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
            {config.label}
        </span>
    );
};
