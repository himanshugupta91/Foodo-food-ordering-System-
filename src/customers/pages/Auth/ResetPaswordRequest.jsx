import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordRequest } from "../../../state/authentication/Action";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ResetPasswordRequest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleSubmit = (values) => {
    console.log("Reset password request:", values);
    dispatch(resetPasswordRequest(values.email));
  };

  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-neutral-800 mb-2 text-center">
        Forgot Password
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Enter your email to receive a password reset link
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg outline-none 
                         focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all
                         placeholder-neutral-400"
            />
            <ErrorMessage name="email">
              {(msg) => <span className="text-red-600 text-sm mt-1 block">{msg}</span>}
            </ErrorMessage>
          </div>

          <button
            type="submit"
            disabled={auth.isLoading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {auth.isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </Form>
      </Formik>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/account/login")}
          className="text-neutral-500 hover:text-primary-600 text-sm transition-colors"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
