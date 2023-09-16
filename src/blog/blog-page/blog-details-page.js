import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import BlogHeader from "../partials/blog-header";
import React, {useEffect} from "react";
import HomeFooter from "../partials/home-footer";
import {VscBook} from "react-icons/vsc";
import {PiSubtitlesBold} from "react-icons/pi";
import {GiLoveMystery} from "react-icons/gi";
import "./index.css";
import {findPostByIdThunk} from "../services/post-thunks";
function BlogDetailsPage() {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  const visitingPost = useSelector((state) => state.post.visitingPost);
  console.log("Visiting post",visitingPost)

  useEffect(() => {

    if (!currentUser || !visitingPost) {
      navigate("/secretlovestory/home");
    }
  }, [currentUser, visitingPost, navigate]);
  const handleClick = async () => {


    navigate('/secretlovestory/blog');

  };
  return (
    <div>
      {currentUser&&visitingPost ? (
          <>
            <BlogHeader />
            <div className="container">
              <br></br>
      <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>My Secret Love Story <VscBook/></h1>
              <div>
                <img
                    src={visitingPost.imageBanner} style={{ width: '100%', height: '400px' }} /></div>
              <br/>
              <div><p style={{color:"deeppink",fontFamily:"New Century Schoolbook",fontSize:"20px",fontWeight: 'bold'}}>
                <PiSubtitlesBold/>&nbsp;&nbsp;{visitingPost.title}</p></div>
              <div style={{color:"pink",fontFamily:"New Century Schoolbook"}}>{visitingPost.userName}&nbsp;@&nbsp;{visitingPost.location}
              </div>
                <div style={{color:"pink",fontFamily:"New Century Schoolbook"}}>{visitingPost.date} - With Love <GiLoveMystery/></div>
              <br/>
              <div style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>{visitingPost.details}</div>
              <div>
                <img
                    src={visitingPost.image1} className="w-100 " /></div>
              <div>
                <img
                    src={visitingPost.image2} className="w-100 " /></div>
              <div>
                <img
                    src={visitingPost.image3} className="w-100 " /></div>
              <div title="See post details" className=" hover-link1" onClick={handleClick} style={{ fontWeight: 'bold'}}><GiLoveMystery /> Go Back</div>

            </div>

            <HomeFooter />
          </>):
          (null)}
    </div>
  );
}
export default BlogDetailsPage;