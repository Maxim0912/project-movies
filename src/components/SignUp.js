import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signup } from "../store/userSlice";

export default function SignUp() {
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((state) => state.user.users);
    const validationSchema = yup.object().shape({
        login: yup
            .string()
            .typeError("Must be a string")
            .notOneOf(Object.keys(users), "Already exists")
            .required("Required"),
        password: yup
            .string()
            .typeError("Must be a string")
            .min(6, "Password is short. At least six characters")
            .required("Required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Password mismatch")
            .required("Required"),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                    confirmPassword: "",
                }}
                validateOnBlur
                onSubmit={(values) => {
                    dispatch(
                        signup({
                            login: values.login,
                            password: values.password,
                        })
                    );
                    history.push("/signin");
                }}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
                    <form className="col-4 justify-content-center align-items-center mb-5 mt-5">
                        <div className="form-group">
                            <label htmlFor={"login"}>Login</label>
                            <input
                                type="text"
                                name={"login"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter login"
                            />
                            {touched.login && errors.login && (
                                <p className="text-danger">{errors.login}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor={"password"}>Password</label>
                            <input
                                type="password"
                                name={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                            {touched.password && errors.password && (
                                <p className="text-danger">{errors.password}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor={"confirmPassword"}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name={"confirmPassword"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                className="form-control"
                                id="exampleInputConfirmPassword1"
                                placeholder="Confirm Password"
                            />
                            {touched.confirmPassword &&
                                errors.confirmPassword && (
                                    <p className="text-danger">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                        </div>
                        <button
                            disabled={!isValid && dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
