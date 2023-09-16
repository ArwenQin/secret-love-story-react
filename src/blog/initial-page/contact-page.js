import Header from "../partials/header";
import React from "react";
import Footer from "../partials/footer";
import {BsFillArrowThroughHeartFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import BlogHeader from "../partials/blog-header";

function ContactPage(){

  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser);



  return (
      <div>
        {currentUser ? <BlogHeader /> : <Header />}
          <br></br>
          <div className="container">
            <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>CONTACT  &nbsp;US &nbsp;<BsFillArrowThroughHeartFill/></h1>

            <br></br>
            <p style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook",fontWeight: "bold" }}>Inquiries, Suggestions, Questions & Sponsorship:</p>

            <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
              L&A Studio<br></br><p></p>
              Email: arwenqin626@gmail.com<br></br><p></p>
              Tel: +1 585 360 6470<br></br><p></p>
              Always With Love ❤️
               </p>





          </div>

          <Footer/>
        </div>
    )
}
export default ContactPage;