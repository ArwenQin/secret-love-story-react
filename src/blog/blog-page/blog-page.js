import BlogHeader from "../partials/blog-header";
import HomeFooter from "../partials/home-footer";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import React, {useEffect,useState} from "react";
import {useNavigate} from "react-router";
import {
  fetchAnotherPostsThunk,
  fetchUserPostsThunk
} from "../services/post-thunks";
import BlogItem from "./blog-item"
import {findUserByUsernameThunk, profileThunk} from "../services/user-thunks";
import {matches} from "@testing-library/jest-dom/dist/utils";


function BlogPage(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const visitingUser = useSelector((state) => state.user.visitingUser);

  const [profile, setProfile] = useState(currentUser);
  const [user2, setUser2] = useState(profile?.user2);
  const [isMatched, setIsMatched] = useState(null);
  useEffect(() => {

    if (!profile ) {
      navigate("/secretlovestory/home");
    }
  }, [profile,  navigate]);
  useEffect(() => {
    const match = async () => {
      let matched = false;

      if (user2) {
        try {
          await dispatch(findUserByUsernameThunk(user2));

        } catch (error) {
          console.error('Error finding user:', error);
        }
      }
    };

    match();
  }, [user2]);

  useEffect(() => {
    let matched = false;


    if (visitingUser && visitingUser.user2 && visitingUser.user2 === profile.username) {
      matched = true;

    }

    setIsMatched(matched);console.log("matched?", isMatched);
  }, [visitingUser, currentUser]);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (e) {
        alert(e);
      }
    };
    loadProfile();
  }, [dispatch]);



  const post = useSelector((state) => state.post.currentPost) || [];
  const anotherPost = useSelector((state) => state.post.anotherPost) || [];


    useEffect(() => {
      const fetchData2 = async () => {
        setIsLoading2(true);
        try {
          if (isMatched&&visitingUser && visitingUser._id) {
            await dispatch(fetchAnotherPostsThunk(visitingUser._id));
          }
        } catch (error) {
          console.error('Error fetching another post:', error);
        }
        setIsLoading2(false);
      };

      if (visitingUser) {
        fetchData2();
      }
    }, [visitingUser, dispatch]);

  console.log("another posts",anotherPost);

  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(fetchUserPostsThunk(currentUser._id));
      setIsLoading(false);
    };

    if (currentUser) {
      fetchData();
    }
  }, [currentUser, dispatch]);
  console.log("posts",post);




    return(
        <div>
          {profile ? (
<>
          <BlogHeader />
          <div className="container">
            <br></br>
            <img src={"https://static.vecteezy.com/system/resources/previews/001/198/736/non_2x/love-banner-in-paper-cut-style-vector.jpg"}
                 className="img-fluid w-100" style={{ height: "320px" }} alt="Responsive image"></img>
            <h1 className=" text-white blog-page-word1" style={{fontFamily:"Brush Script MT",margin:0}}>
              Love Story continues
            </h1>
            <h1 className=" text-white blog-page-word2" style={{fontFamily:"Brush Script MT",margin:0}}>
              Your Secret Love Story Blog
            </h1>
            <ul className="list-group">

              {
                post.map(pos =>
                    <BlogItem
                        key={pos._id} post={pos}/> )
              }

              {
                anotherPost.map(pos =>
                    <BlogItem
                        key={pos._id} post={pos}/> )
              }

            </ul>
          </div>
          <HomeFooter />
</>):
              (null)}
        </div>

    )
}
export default BlogPage;