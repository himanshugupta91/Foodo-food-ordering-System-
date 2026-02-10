import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/Login/Login";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4 py-12 animate-fade-in">
            <div className="w-full max-w-md">
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {/* Logo/Header */}
                    <div className="text-center mb-8">
                        <div onClick={() => navigate("/")} className="inline-flex items-center space-x-2 cursor-pointer group">
                            <span className="text-4xl">🍴</span>
                            <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent
                           group-hover:scale-105 transform transition-transform">
                                Foodo
                            </h1>
                        </div>
                    </div>

                    {/* Login Form */}
                    <LoginForm />
                </div>

                {/* Footer */}
                <p className="mt-8 text-xs text-neutral-500 text-center">
                    © 2025 Foodo. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
