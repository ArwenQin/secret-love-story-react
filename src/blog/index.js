import { Routes, Route } from "react-router";


import HomePage from "./initial-page/home-page";
import AboutPage from "./initial-page/about-page";
import LoginPage from "./initial-page/login-page";
import RegisterPage from "./initial-page/register-page";
import ContactPage from "./initial-page/contact-page";
import BlogPage from "./blog-page/blog-page";
import BlogDetailsPage from "./blog-page/blog-details-page";
import authReducer from "./reducers/user-reducer";
import postReducer from "./reducers/post-reducer";
import ComposePage from "./blog-page/compose-page";
import SecretPage from "./blog-page/secret-page";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";


const store = configureStore(
  {
    reducer: {
      post: postReducer, user: authReducer
    }
  });


function blog() {
  return (
    <Provider store={store}>


            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/blog" element={<BlogPage/>} />
              <Route path="/more" element={<BlogDetailsPage/>} />
              <Route path="/compose" element={<ComposePage/>} />
              <Route path="/secret" element={<SecretPage/>} />


            </Routes>




    </Provider>
  );
}
export default blog

