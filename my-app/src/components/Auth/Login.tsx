import React from "react";
import '../../styles/login.scss';
import { Formik } from "formik";
import { LoginSchema } from "../../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { Application } from "../../utils/enums";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
    const navigate = useNavigate()
    return (
        <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
            if (values) {
                    navigate(Application.Profile)
              }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className={errors.email && touched.email ?
                    "border-red" : "form-control inp_text"}
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className={errors.password && touched.password ? 
                    "border-red" : "form-control"}
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    )
}