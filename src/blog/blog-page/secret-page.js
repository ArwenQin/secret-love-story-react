import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import BlogHeader from "../partials/blog-header";
import React, {useCallback, useEffect, useState} from "react";
import HomeFooter from "../partials/home-footer";
import {
  findUserByUsernameThunk,
  profileThunk,
  updateUserThunk
} from "../services/user-thunks";
import {VscBook} from "react-icons/vsc";
import {GiLoveMystery} from "react-icons/gi";

function SecretPage(){


  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    setIsMatched(matched);
  }, [visitingUser, currentUser]);



  const unmatch = async () => {
    const newProfile = {
      ...profile,
      user2: null,
    };

    setProfile(newProfile);

    try {
      await dispatch(updateUserThunk(newProfile));

      alert('Successfully unmatched!');
      setUser2(newProfile.user2);
      setIsMatched(false);

    } catch (e) {
      alert(e);
    }
  };

  const save = async () => {
    try {
      await dispatch(updateUserThunk(profile));

      alert('Successfully saved!');
      setUser2(profile.user2)
    } catch (e) {
      alert(e);
    }
  };

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
  return(


      <div>

            <BlogHeader />

        <div className="container">
          {(() => {
            if (user2 && isMatched) {
              return (
                  <>
                    <div><img
                        src={"https://img.freepik.com/premium-vector/i-love-you-banner-romantic-feeling-love-concept-caligraphy-text-vector-eps-10-isolated-white-background_399089-952.jpg?w=1060"}
                        className="img-fluid w-100"
                        style={{ height: "360px" }}
                        alt="Responsive image"
                    />

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h1 style={{ color: "hotpink", fontFamily: "Brush Script MT" }}>
                            You Are Matched With <GiLoveMystery/> :
                          </h1>
                          <span title="Delete this secret" className="hover-link2" style={{ fontWeight: 'bold' }} onClick={unmatch}>
    Unmatch
  </span>
                        </div>
                        <h2 style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
                          <br/>
                          {profile.user2}
                        </h2>
                        <br/>
                        <h3 style={{color:"pink", fontFamily:"New Century Schoolbook"}}>
                          Sharing Your Love Stories Now ...
                        </h3>
                      </div>
                      <br/>





                    </div>
                  </>
              );
            } else if (user2) {
              return (
                  <>
                    <img
                        src={"https://img.freepik.com/premium-vector/i-love-you-banner-romantic-feeling-love-concept-caligraphy-text-vector-eps-10-isolated-white-background_399089-952.jpg?w=1060"}
                        className="img-fluid w-100"
                        style={{ height: "360px" }}
                        alt="Responsive image"
                    />
                    <br/>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1 style={{ color: "hotpink", fontFamily: "Brush Script MT" }}>
                          Your Secret Love Is <GiLoveMystery/> :
                        </h1>
                        <span title="Delete this secret" className="hover-link2" style={{ fontWeight: 'bold' }} onClick={unmatch}>
    Unmatch
  </span>
                      </div>
                      <h2 style={{color:"#FF66B2",fontFamily:"New Century Schoolbook"}}>
                        <br/>
                        {profile.user2}
                      </h2>
                      <br/>
                      <h3 style={{color:"pink", fontFamily:"New Century Schoolbook"}}>
                        Waiting for their response...
                      </h3>
                    </div>
                    <br/>
                  </>
              );
            } else {
              return (
                  <>
                    {profile && (
                        <div>
                          <br></br>
                          <img
                              src={"https://img.freepik.com/premium-vector/love-you-card-banner-with-symbol-arrow-love-script-you-word-valentine-elements-pink-background_139523-557.jpg?w=2000"}
                              className="img-fluid w-100"
                              style={{ height: "360px" }}
                              alt="Responsive image"
                          />
                          <br/>
                          <h1 style={{color:"hotpink", fontFamily:"Brush Script MT"}}>
                            Add Your Secret Love <GiLoveMystery/>
                          </h1>
                          <div>
                            <label style={{color:"#FF66B2",fontSize:"18px",fontFamily:"New Century Schoolbook"}}>
                              Tell Me Your Secret Love's User Name&nbsp;
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                style={{color:"pink"}}
                                value={profile.user2}
                                onChange={(event) => {
                                  const newProfile = {
                                    ...profile,
                                    user2: event.target.value,
                                  };
                                  setProfile(newProfile);
                                }}
                            />
                          </div>
                          <p></p>
                        </div>
                    )}
                    <button
                        className="btn mt-2"
                        style={{ backgroundColor: "hotpink", color: "white", fontWeight: 'bold' }}
                        onClick={save}
                    >
                      &nbsp;No One Else Would Know&nbsp;
                    </button>
                    <div style={{color:"pink",fontSize:"16px",fontFamily:"New Century Schoolbook"}}>
                      &nbsp;Until they love you too
                    </div>
                  </>
              );
            }
          })()}
        </div>



            <HomeFooter />


            </div>




  )
}
export default SecretPage