// Reusable Form Components
import React from "react";

export const Input = ({
    label,
    error,
    className = "",
    required = false,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <input
                className={`input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export const Select = ({
    label,
    options = [],
    error,
    className = "",
    required = false,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <select
                className={`input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''} ${className}`}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export const Textarea = ({
    label,
    error,
    className = "",
    required = false,
    rows = 4,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <textarea
                rows={rows}
                className={`input resize-none ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export const Checkbox = ({
    label,
    className = "",
    ...props
}) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                className={`w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500 focus:ring-2 ${className}`}
                {...props}
            />
            {label && (
                <span className="ml-2 text-sm text-neutral-700">{label}</span>
            )}
        </label>
    );
};

export const FormGrid = ({ children, cols = 2, className = "" }) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <div className={`grid ${gridCols[cols]} gap-4 ${className}`}>
            {children}
        </div>
    );
};

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        danger: 'bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all',
        outline: 'border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
