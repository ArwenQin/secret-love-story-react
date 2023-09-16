import React, {useEffect, useState} from "react";
import {addNewPostThunk} from "../services/post-thunks";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import BlogHeader from "../partials/blog-header";
import HomeFooter from "../partials/home-footer";
import {VscBook} from "react-icons/vsc";




function ComposePage() {

  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {

    if (!currentUser ) {
      navigate("/secretlovestory/home");
    }
  }, [currentUser,  navigate]);



  const [ post, setPost ] = useState(currentUser ? {userName: currentUser.username,
    userId: currentUser._id}:null);

  const dispatch = useDispatch();

  const save = async () => { try {

    await dispatch(addNewPostThunk(post));
    alert('Successfully posted!')
  } catch (e) {
    alert(e);
  }
  };



  return (
    <div>
      {currentUser ? (
          <>
            <BlogHeader />
            <div className="container">
        <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>Compose Your Secret Love Story <VscBook/></h1>
        <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
          <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Post Title</label>
          <input className="form-control "
                 style={{color:"deeppink"}}
                 placeholder="A Love Story"
                 type="text" value={post.title}
                 onChange={(event) => {
                   const newPost = {
                     ...post, title: event.target.value
                   };
                   setPost(newPost);
                 }}
          />
          <p></p>
        </div>
        <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
          <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Date</label>
          <input
              className="form-control"
              style={{color:"deeppink"}}
              placeholder="2023-05-29"
              type="text" value={post.date}
              onChange={(event) => {
                const newPost = {
                  ...post, date: event.target.value,
                };
                setPost(newPost);
              }}/>
          <p></p>
        </div>

        <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
          <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Details</label>
          <textarea
              className="form-control"
              style={{color:"deeppink"}}
              placeholder="Details of your post" value={post.details}
              onChange={(event) => {
                const newPost = {
                  ...post, details: event.target.value,
                };
                setPost(newPost);
              }}/>
          <p></p>
        </div>



        <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
          <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Location</label>
          <input
              className="form-control"
              style={{color:"deeppink"}}
              placeholder="Location of your story"
              type="text" value={post.location}
              onChange={(event) => {
                const newPost = {
                  ...post, location: event.target.value,
                };
                setPost(newPost);
              }}/>
          <p></p>
        </div>

        <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
          <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Upload The Banner Image</label>
          <input
              className="form-control"
              style={{color:"deeppink"}}
              placeholder="Banner"
              type="text" value={post.imageBanner}
              onChange={(event) => {
                const newPost = {
                  ...post, imageBanner: event.target.value,
                };
                setPost(newPost);
              }}/>
          <p></p>
        </div>

            <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
              <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Upload The First Image</label>
              <input
                  className="form-control"
                  style={{color:"deeppink"}}
                  placeholder="Image One"
                  type="text" value={post.image1}
                  onChange={(event) => {
                    const newPost = {
                      ...post, image1: event.target.value,
                    };
                    setPost(newPost);
                  }}/>
              <p></p>
            </div>

            <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
              <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Upload The Second Image</label>
              <input
                  className="form-control"
                  style={{color:"deeppink"}}
                  placeholder="Image Two"
                  type="text" value={post.image2}
                  onChange={(event) => {
                    const newPost = {
                      ...post, image2: event.target.value,
                    };
                    setPost(newPost);
                  }}/>
              <p></p>
            </div>

            <div style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
              <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>Upload The Third Image</label>
              <input
                  className="form-control"
                  style={{color:"deeppink"}}
                  placeholder="Image Three"
                  type="text" value={post.image3}
                  onChange={(event) => {
                    const newPost = {
                      ...post, image3: event.target.value,
                    };
                    setPost(newPost);
                  }}/>
              <p></p>
            </div>
        <button className="btn  mt-2" style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }} onClick={save}>&nbsp;Post&nbsp;  </button>
            </div>

            <HomeFooter />
     </>):
        (null)}
    </div>
      )

    }



export default ComposePage;

