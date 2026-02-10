import React from 'react';

// Base Skeleton Component
export const Skeleton = ({ className = '', variant = 'rectangular', animation = 'pulse' }) => {
    const animationClass = animation === 'pulse' ? 'animate-pulse' : 'animate-shimmer';

    const variantClasses = {
        rectangular: 'rounded',
        circular: 'rounded-full',
        text: 'rounded h-4',
    };

    return (
        <div
            className={`bg-neutral-200 ${variantClasses[variant]} ${animationClass} ${className}`}
        />
    );
};

// Restaurant Card Skeleton
export const RestaurantCardSkeleton = () => {
    return (
        <div className="card overflow-hidden">
            <Skeleton variant="rectangular" className="w-full h-48" />
            <div className="p-4 space-y-3">
                <Skeleton variant="text" className="w-3/4" />
                <Skeleton variant="text" className="w-1/2" />
                <div className="flex items-center justify-between mt-4">
                    <Skeleton variant="text" className="w-20" />
                    <Skeleton variant="text" className="w-16" />
                </div>
            </div>
        </div>
    );
};

// Menu Item Skeleton
export const MenuItemSkeleton = () => {
    return (
        <div className="card">
            <div className="flex items-start space-x-4">
                <Skeleton variant="rectangular" className="w-24 h-24 flex-shrink-0" />
                <div className="flex-1 space-y-3">
                    <Skeleton variant="text" className="w-3/4" />
                    <Skeleton variant="text" className="w-full" />
                    <Skeleton variant="text" className="w-1/2" />
                    <div className="flex items-center justify-between mt-4">
                        <Skeleton variant="text" className="w-20" />
                        <Skeleton variant="rectangular" className="w-24 h-10 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Table Skeleton
export const TableSkeleton = ({ rows = 5, columns = 4 }) => {
    return (
        <div className="space-y-3">
            {/* Header */}
            <div className="flex space-x-4 p-4 bg-neutral-50 rounded-lg">
                {Array.from({ length: columns }).map((_, i) => (
                    <Skeleton key={`header-${i}`} variant="text" className="flex-1" />
                ))}
            </div>
            {/* Rows */}
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex space-x-4 p-4 border-b border-neutral-100">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <Skeleton key={`cell-${rowIndex}-${colIndex}`} variant="text" className="flex-1" />
                    ))}
                </div>
            ))}
        </div>
    );
};

// Profile Skeleton
export const ProfileSkeleton = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <Skeleton variant="circular" className="w-20 h-20" />
                <div className="flex-1 space-y-2">
                    <Skeleton variant="text" className="w-1/3" />
                    <Skeleton variant="text" className="w-1/4" />
                </div>
            </div>
            <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton variant="text" className="w-24" />
                        <Skeleton variant="rectangular" className="w-full h-12 rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Form Skeleton
export const FormSkeleton = ({ fields = 3 }) => {
    return (
        <div className="space-y-5">
            {Array.from({ length: fields }).map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton variant="text" className="w-32" />
                    <Skeleton variant="rectangular" className="w-full h-12 rounded-lg" />
                </div>
            ))}
            <Skeleton variant="rectangular" className="w-full h-12 rounded-lg mt-6" />
        </div>
    );
};

// Page Loader
export const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl">🍴</span>
                </div>
                <p className="text-neutral-600 font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default Skeleton;
