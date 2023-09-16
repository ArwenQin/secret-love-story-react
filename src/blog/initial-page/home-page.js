import HomeFooter from "../partials/home-footer";
import Header from "../partials/header";
import { Link } from "react-router-dom";
import {BsFillArrowThroughHeartFill} from "react-icons/bs";
import {GiLoveMystery} from "react-icons/gi";
import {useSelector} from "react-redux";
import BlogHeader from "../partials/blog-header";
import React from "react";

function HomePage() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser);


  return (
      <div>
        {currentUser ? <BlogHeader /> : <Header />}
        <div className="container">
          <div className="welcome-section">
            <br></br>
            <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>Where Love Stories Begin: Share Yours Today <BsFillArrowThroughHeartFill/></h1>
            <p style={{color:"lightpink",fontFamily:"New Century Schoolbook"}}>Inspiring Love, One Tale at a Time</p>
            <img
                src="https://img.freepik.com/premium-vector/realistic-design-editable-text-love-story-suitable-valentine-s-day-banner_16148-2167.jpg?w=2000"
                alt="Love Story Banner"
                style={{ width: '100%', height: '400px' }}
            />
          </div>
          <br></br>
          <div className="cta-section">
            <h2 style={{color:"hotpink",fontFamily:"Apple Chancery"}}>Share Your Love Story Now <GiLoveMystery/></h2>
            <p style={{color:"lightpink",fontFamily:"New Century Schoolbook"}}>Join our community and start sharing your beautiful love stories today</p>
            <div className="cta-buttons">
              {currentUser ? (<><span><Link to="/secretlovestory/blog" className="btn mr-2" style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }}> My Love Story</Link></span>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span><Link to="/secretlovestory/secret" className="btn " style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }}>
                &nbsp;&nbsp;Secret Love&nbsp;&nbsp;
                </Link></span></>

              ):(<><span><Link to="/secretlovestory/login" className="btn mr-2" style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }}>
                &nbsp; Log In&nbsp;
              </Link></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span><Link to="/secretlovestory/register" className="btn " style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }}>
                Register
              </Link></span></>)

                  }
            </div>
          </div>
        </div>

        <HomeFooter />
      </div>
  );
}

export default HomePage;
