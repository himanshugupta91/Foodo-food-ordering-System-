import React, { useEffect, useState } from "react";
import RegistrationForm from "../../components/Register/Register";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Login/Login";
import ResetPasswordRequest from "./ResetPaswordRequest";
import { useSelector } from "react-redux";
import ResetPasswordForm from "./ResetPasswordForm";

const Auth = ({ open, handleClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    if (auth.success || auth.error) setOpenSnackBar(true);
  }, [auth.success, auth.error]);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleModalClose = () => {
    navigate("/");
    if (handleClose) handleClose();
  };

  const isModalOpen =
    location.pathname === "/account/register" ||
    location.pathname === "/account/login" ||
    location.pathname === "/account/reset-password-request" ||
    location.pathname === "/account/reset-password";

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-neutral-900 bg-opacity-75 backdrop-blur-sm"
              onClick={handleModalClose}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gradient-to-br from-white to-neutral-50 px-8 pt-8 pb-6">
                {location.pathname === "/account/register" ? (
                  <RegistrationForm />
                ) : location.pathname === "/account/login" ? (
                  <LoginForm />
                ) : location.pathname === "/account/reset-password" ? (
                  <ResetPasswordForm />
                ) : (
                  <ResetPasswordRequest />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Snackbar for success/error messages */}
      {openSnackBar && (auth.success || auth.error) && (
        <div className="fixed top-4 right-4 z-[60] animate-slide-down">
          <div
            className={`${auth.error ? "bg-red-600" : "bg-success-600"
              } text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 min-w-[300px]`}
          >
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {auth.error ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              )}
            </svg>
            <p className="flex-1">{auth.success || auth.error}</p>
            <button onClick={handleCloseSnackBar} className="flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
