// Modal Component using Headless UI
import React from "react";
import { Dialog } from "@headlessui/react";

export const Modal = ({
    open,
    onClose,
    title,
    children,
    maxWidth = "lg",
    showCloseButton = true
}) => {
    const widths = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "4xl": "max-w-4xl",
    };

    return (
        <Dialog open={open} onClose={onClose} className="relative z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

            {/* Full-screen container */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className={`w-full ${widths[maxWidth]} bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto`}>
                    {/* Header */}
                    {(title || showCloseButton) && (
                        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                            {title && (
                                <Dialog.Title className="font-display text-2xl font-bold text-neutral-900">
                                    {title}
                                </Dialog.Title>
                            )}
                            {showCloseButton && (
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                        {children}
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export const Card = ({ children, className = "", onClick }) => {
    return (
        <div
            className={`card ${onClick ? 'cursor-pointer interactive' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export const LoadingSpinner = ({ size = "md" }) => {
    const sizes = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    };

    return (
        <div className="flex items-center justify-center p-8">
            <div className={`spinner ${sizes[size]}`}></div>
        </div>
    );
};

export const EmptyState = ({ icon, title, description, action }) => {
    return (
        <div className="text-center py-12">
            {icon && (
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
            {description && (
                <p className="text-neutral-600 mb-6 max-w-md mx-auto">{description}</p>
            )}
            {action}
        </div>
    );
};
