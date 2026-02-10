import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../state/authentication/Action";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmed password is required"),
});

function ResetPasswordForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const initialValues = {
    password: "",
    confirmedPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    const data = { password: values.password, token };
    dispatch(resetPassword({ navigate, data }));
    setSubmitting(false);
  };

  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-neutral-800 mb-2 text-center">
        Reset Password
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Enter your new password below
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div>
            <Field
              name="password"
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg outline-none 
                         focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all
                         placeholder-neutral-400"
            />
            <ErrorMessage name="password">
              {(msg) => <span className="text-red-600 text-sm mt-1 block">{msg}</span>}
            </ErrorMessage>
          </div>

          <div>
            <Field
              name="confirmedPassword"
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg outline-none 
                         focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all
                         placeholder-neutral-400"
            />
            <ErrorMessage name="confirmedPassword">
              {(msg) => <span className="text-red-600 text-sm mt-1 block">{msg}</span>}
            </ErrorMessage>
          </div>

          <button type="submit" className="btn-primary w-full">
            Reset Password
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
}

export default ResetPasswordForm;
