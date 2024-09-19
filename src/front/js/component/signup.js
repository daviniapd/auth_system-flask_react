import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(null);

    function handleSignup(e) {
        e.preventDefault();
        
        if (!email || !username || !password) {
            setMessage("Please, complete all fields.");
            return;
        }
        if (password.length < 8) {
            setMessage("The password must be at least 8 characters.");
            return;
        }
        actions.checkUserExists(username, email).then(userExists => {
            if (userExists) {
                setMessage("The username or email address is already registered.");
                return;
            }
            actions.signup(email, username, password);
        });
    }

    return (
        <>
            {store.auth === true ? <Navigate to="/private" /> :
                <form className="container h-100 d-flex justify-content-center align-items-center my-5" onSubmit={handleSignup}>
                    <div className="card" id="cardSignup">
                        <a className="singup">Sign Up</a>
                        {message && <div className="alert alert-warning d-flex align-items-center mx-2"><i className="fa-solid fa-triangle-exclamation me-2"/>{message}                        
                        <i type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert(null)}></i></div>}
                        <div className="inputBox1">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <span className="user">Email</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <span>Username</span>
                        </div>

                        <div className="inputBox">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <span>Password</span>
                        </div>

                        <button type="submit" className="enter" onClick={handleSignup}>Enter</button>
                    </div>
                </form>
            }
        </>
    );
};