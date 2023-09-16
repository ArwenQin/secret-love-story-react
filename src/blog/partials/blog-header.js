import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutThunk }
  from "../services/user-thunks";
function BlogHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="navbar-header">
              <p className="header-brand">SECRET LOVE STORY</p>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">

                <li id="blog" className="nav-item header-margin">
                  <Link to="/secretlovestory/home" className="nav-link">HOME</Link>
                </li>

                <li id="blog" className="nav-item header-margin">
                  <Link to="/secretlovestory/blog" className="nav-link">BLOG</Link>
                </li>

                <li id="more" className="nav-item header-margin">
                  <Link to="/secretlovestory/more" className="nav-link">MORE</Link>
                </li>
                <li id="compose" className="nav-item header-margin">
                  <Link to="/secretlovestory/compose" className="nav-link">COMPOSE</Link>
                </li>
                <li id="secret" className="nav-item header-margin">
                  <Link to="/secretlovestory/secret" className="nav-link">SECRET</Link>
                </li>
                <li id="about" className="nav-item header-margin">
                  <Link to="/secretlovestory/about" className="nav-link">ABOUT</Link>
                </li>
                <li id="contact" className="nav-item header-margin">
                  <Link to="/secretlovestory/contact" className="nav-link">CONTACT US</Link>
                </li>
                <li id="logout" className="nav-item header-margin" style={{cursor: "pointer"}}>
                  <a className="nav-link" onClick={() => {
                    dispatch(logoutThunk());
                    navigate("../home");}}>LOG OUT</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default BlogHeader;
