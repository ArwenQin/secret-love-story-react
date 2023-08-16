import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { registerThunk } from "../services/auth-thunks";
function RegisterScreen() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password }));


    } catch (e) {
      alert(e);
    }
    navigate('/tuiter/login');
  };


  return (
      <div>
        <h1>Register Screen</h1>
        <div className="mt-2">
          <label>Username</label>
          <input className="form-control" type="text" value={username}
                 onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input className="form-control" type="password" value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button className="btn btn-primary mt-2"
                onClick={handleRegister}>
          Register
        </button>
      </div>
  );

}
export default RegisterScreen;

