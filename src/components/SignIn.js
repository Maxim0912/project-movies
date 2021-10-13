import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signin } from "../store/userSlice";

export default function Signin() {
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();
    const history = useHistory();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onChangeLogin = (e) => {
        setLogin(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSignIn = (e) => {
        e.preventDefault();
        if (users[login] && users[login].password === password) {
            dispatch(signin({ login, password }));
            history.push("/");
        } else {
            setMessage("Wrong Login or Password");
        }
    };

    return (
        <form className="col-4 justify-content-center align-items-center mb-5 mt-5">
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <input
                    type="text"
                    placeholder="Enter login"
                    name="login"
                    value={login}
                    onChange={onChangeLogin}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor={"password"}>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    className="form-control"
                />
                <p className="text-danger">{message}</p>
            </div>
            <button
                disabled={!login && !password}
                onClick={onSignIn}
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    );
}
