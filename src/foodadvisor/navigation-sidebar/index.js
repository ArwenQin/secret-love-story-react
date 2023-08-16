import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {AiFillHome,AiOutlineBell} from "react-icons/ai";
import {BsHash,BsEnvelope,BsBookmark,BsPerson} from "react-icons/bs";
import {LiaListSolid} from "react-icons/lia";
import {CiCircleMore, CiLogin} from "react-icons/ci";
import {MdAppRegistration} from "react-icons/md";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [{ icon: <AiFillHome />, text: "home" },
    { icon: <BsHash/>, text: "explore" },
    { icon: <AiOutlineBell/>, text: "notifications" },
    { icon: <BsEnvelope/>, text: "messages" },
    { icon: <BsBookmark/>, text: "bookmarks" },
    { icon: <LiaListSolid/>, text: "lists" },
    { icon: <CiCircleMore/>, text: "more" }
  ]
  return (
      <div className="list-group">
        {links.map((link) =>
            <Link to={`/tuiter/${link.text}`} className={`list-group-item text-capitalize ${active === link.text ? "active" : ""}`}>
              {link.icon} &nbsp;<span className="d-none d-xl-inline">{link.text}</span>
            </Link>

        )}
        {!currentUser && <Link className={`list-group-item text-capitalize ${active === 'login' ? 'active' : ''}`} to="/tuiter/login">  <CiLogin/> &nbsp;<span className="d-none d-xl-inline">Login </span>  </Link>}
        {!currentUser && <Link className={`list-group-item text-capitalize ${active === 'register' ? 'active' : ''}`} to="/tuiter/register"><MdAppRegistration/>&nbsp;<span className="d-none d-xl-inline">Register</span></Link>}
        { currentUser && <Link className={`list-group-item text-capitalize ${active === 'profile' ? 'active' : ''}`} to="/tuiter/profile"><BsPerson/> &nbsp;<span className="d-none d-xl-inline">Profile</span> </Link>}

      </div>
  );
};
export default NavigationSidebar;

