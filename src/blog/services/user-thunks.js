import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./user-service";



export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      try{
      const user = await userService.login(credentials);
      console.log("Successfully logged in");
      return user;}
      catch (error){
        alert("Invalid Username or Password");
        console.log("Login failed- Invalid Username or Password");
        throw(error);
      }
    }
);

export const registerThunk = createAsyncThunk(
    "user/register", async (userData) => {
      try{
      const user = await userService.register(userData);
        console.log("Successfully registered");
        alert("You have successfully registered!");
        
      return user;}
      catch (error){
        alert("Username already exists");
        console.log("Register failed- Duplicate Username");
        throw(error);
      }
    }
);


export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
      return await userService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      await userService.updateUser(user);
      console.log("Successfully updated user information",user);
      return user;
    });
export const findUserByIdThunk = createAsyncThunk(
    "users/findUserById",
    async (uid) => await userService.findUserById(uid)
);


export const findUserByUsernameThunk = createAsyncThunk(
    "users/findUserByUsername",
    async (name) => await userService.findUserByUsername(name)
);

export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
      const response = userService.profile();
      return response;
    });