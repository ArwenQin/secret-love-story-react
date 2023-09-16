import React, { useEffect, useState } from "react";
import HomeFooter from "../partials/home-footer";
import Header from "../partials/header";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../services/user-thunks";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser)



  useEffect(() => {
    if (currentUser) {
      navigate('/secretlovestory/blog');
    }
  }, [currentUser, navigate]);

  const handleLogin = async () => {
    try {
      await dispatch(loginThunk({ username, password }));
    } catch (e) {
      alert(e);
    }
  };

  return (
      <div>
        <Header />
        <br></br>
        <div className="container">
        <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>LOG IN</h1>
          <br></br>
        <div className="mt-2">
          <label style={{color:"pink"}}>Username</label>
          <input className="form-control" type="text" value={username}
                 onChange={(event) => setUsername(event.target.value)} />
        </div>
          <br></br>
        <div className="mt-2">
          <label style={{color:"pink"}}>Password</label>
          <input className="form-control" type="password" value={password}
                 onChange={(event) => setPassword(event.target.value)} />
        </div>

      <br></br>

        <button className="btn  mt-2" style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }}
                onClick={handleLogin}>
          Let's Love
        </button>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <HomeFooter/>
      </div>
  );

}
export default LoginPage;

