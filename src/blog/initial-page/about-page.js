import Header from "../partials/header";
import BlogHeader from "../partials/blog-header";
import React from "react";
import Footer from "../partials/home-footer";
import {BsFillArrowThroughHeartFill} from "react-icons/bs";
import {FaMicroblog, FaSlideshare} from "react-icons/fa";
import {GiLoveMystery, GiLovers} from "react-icons/gi";
import { useSelector} from "react-redux";
function AboutPage(){
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser);



  return (
      <div>
        {currentUser ? <BlogHeader /> : <Header />}
  <br></br>
  <div className="container">

    <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>Secret Love Story: A Place to Chronicle Your Love Journey <BsFillArrowThroughHeartFill/></h1>
    <p style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook",fontWeight: "bold" }}>It's that simple - Record, Match & Love</p>
    <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>In the realm of love, some tales are too tender to be shared openly. Welcome to Secret Love Story, a sanctuary for your most cherished romantic memories. Here, you can immortalize your love stories, preserving them as intimate treasures meant for your eyes only.
</p>
    <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook",fontWeight: "bold" }}>The Heart's Secret Garden&nbsp;&nbsp;<FaMicroblog/></p>
    <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
      Within these pages, you can pen the epic of your love, capturing the moments that make your heart race and your soul sing. Enrich your stories with vivid images and precious memories, and rest assured, your secrets will remain safe, known only to you.
</p>
    <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook",fontWeight: "bold" }}>Whispering Affection&nbsp;&nbsp;<GiLoveMystery/></p>
      <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
      In the world of love, whispers are often the most powerful. With Secret Love Story, you have the power to secretly express your admiration for that special someone. Like a silent serenade, your affection remains hidden, awaiting a response that may set your heart aflutter.
    </p>
      <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook",fontWeight: "bold" }}>The Dance of Destiny&nbsp;&nbsp;<GiLovers/></p>
        <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
      But fate has its own designs. When two souls secretly love each other, a delightful secret is unveiled. It's a moment of enchantment, where Secret Love Story gently reveals that your love is reciprocated, igniting the flames of a budding romance.
      </p>
        <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook",fontWeight: "bold" }}>Sharing the Symphony&nbsp;&nbsp;<FaSlideshare/></p>
          <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
      As your love story unfolds, so too does the opportunity to share in each other's worlds. Once the stars align, and your affection is mutual, you both gain access to each other's secret love blogs. It's a romantic journey where two hearts converge, and the tale of your love story becomes a beautiful duet.
</p>
    <p style={{color:"#FF66B2",fontFamily:"New Century Schoolbook",fontWeight: "bold"}}>
      Join us at Secret Love Story, where love is a whispered secret, a dance of destiny, and a shared symphony. Begin your enchanting journey today.
        </p>

  </div>


        <div>
  <Footer/>
</div>
      </div>
  )
}
export default AboutPage;