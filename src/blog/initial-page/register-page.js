import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { registerThunk } from "../services/user-thunks";
import Header from "../partials/header";

import HomeFooter from "../partials/home-footer";

function RegisterPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [type, setType] = useState("customer");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password}));

    } catch (e) {
      alert(e);
    }

    navigate('/secretlovestory/login');
  };


  return (
      <div>

          <Header />
          <br></br>
        <div className="container">
        <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>Register Now</h1><br></br>
        <div className="mt-2">
          <label style={{color:"pink"}}>Username</label>
          <input className="form-control" type="text" value={username}
                 onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="mt-2"><br></br>
          <label style={{color:"pink"}}>Password</label>
          <input className="form-control" type="password" value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>
          <br></br>



        <button className="btn  mt-2" style={ { backgroundColor: "hotpink",color: "white",fontWeight: 'bold' }}
                onClick={handleRegister}>
          Register
        </button>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <HomeFooter/>
      </div>
  );

}
export default RegisterPage;

