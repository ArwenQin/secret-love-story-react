import React from "react";
import {BiFoodMenu} from "react-icons/bi";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { GiLoveMystery} from "react-icons/gi";

import {
  deletePostThunk,
   findPostByIdThunk,

} from "../services/post-thunks";
import {HiOutlineBookOpen} from "react-icons/hi";
import {AiFillDelete} from "react-icons/ai";


const BlogItem = (
    {
      post = {
        "userName":"ArwenQin",
        "title": "A Love Story: Lun and Wen's Journey",

        "location": "Love Land",



        "date":"2023-05-29",


        "imageBanner": 'https://png.pngtree.com/thumb_back/fh260/background/20200726/pngtree-love-story-light-background-image_368870.jpg',

        "image1": 'https://img.freepik.com/premium-photo/couple-love-postcard-valentine-s-day-generative-ai_791958-21.jpg',
        "image2": 'https://media.istockphoto.com/id/1124728680/photo/man-and-woman-sitting-by-the-sea-kissing-at-sunset-at-meloneras-beach-walk-gran-canaria.jpg?s=612x612&w=0&k=20&c=UaWmWHgQEXSA6g0TN-e1G9tTwCO4x2UmgNUqo2WHqN0='  ,
        "image3": 'https://b0.bdstatic.com/54379496b8c4ab3694eef4c173f92996.jpg@h_1280' ,

        "details": "In the bustling halls of a university, amidst the chatter of students rushing to their next class, an unassuming love story began to unfold. Meet Lun and Wen, two individuals who, as fate would have it, started their journey as mere classmates but ended up discovering a profound connection that would change their lives forever."
,"_id": "64f42a67e427b6d47c0b46a866"
      }
    }
) => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleExploreClick = async () => {
    await dispatch(findPostByIdThunk(post._id));

    navigate('/secretlovestory/more');

  };
  const deletePostHandler = (id) => {
    dispatch(deletePostThunk(id));
    alert("Successfully deleted! Please refresh to see the changes.")

  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8 col-sm-9 col-12">
            <div><span className="fw-bolder">{post.userName}</span> @ {post.location}</div>
            <div className="fw-bolder"><HiOutlineBookOpen/>&nbsp;{post.title}</div>
            <div><BiFoodMenu/>&nbsp;Date: {post.date}</div>

              <span title="See post details" className=" hover-link1" onClick={handleExploreClick} style={{ fontWeight: 'bold'}}><GiLoveMystery /> See Details</span>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                  <span title="Delete this post" className=" hover-link2" style={{ fontWeight: 'bold' }} onClick={() => deletePostHandler(post._id)}><AiFillDelete  size={14}
                                                              />Delete</span>
            </div>

          <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-3 d-none d-sm-block">
            <img width={100} className="float-end rounded-3" src={`${post.image1}`}/>
          </div>
        <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
          {post.details.length > 330 ? (
              <>
                {post.details.substring(0, 330)}...
              </>
          ) : (
              post.details
          )}
        </div>
        </div>
      </li>
  );
};
export default BlogItem;