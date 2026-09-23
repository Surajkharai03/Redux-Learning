import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";


// GET CURRENT USER

export const asynccurrentuser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(loaduser(user));
    } else {
      console.log("User Not Logged In!");
    }

  } catch (error) {
    console.log("Current User Error:", error);
  }
};


// LOGOUT USER

export const asynclogoutuser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");

    dispatch(removeuser());

    console.log("Logout Success");

  } catch (error) {
    console.log("Logout Error:", error);
  }
};


// LOGIN USER

export const asyncloginuser = (user) => async (dispatch) => {
  try {

    // Find user using email
    const { data } = await axios.get(
      `/users?email=${encodeURIComponent(user.email)}`
    );

    console.log("Users Found:", data);


    // Check password
    const loggedInUser = data.find(
      (item) =>
        String(item.password) === String(user.password)
    );


    // Wrong password
    if (!loggedInUser) {

      console.log("Invalid email or password");

      return false;
    }


    // Save logged-in user
    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    );


    // Put user into Redux
    dispatch(loaduser(loggedInUser));


    console.log("Login Success:", loggedInUser);


    // Tell Login.jsx that login was successful
    return true;

  } catch (error) {

    console.log("Login Error:", error);

    return false;
  }
};


// REGISTER USER

export const asyncregisteuser = (user) => async () => {
  try {

    const newUser = {
      ...user,
      isAdmin: false,
    };

    const { data } = await axios.post(
      "/users",
      newUser
    );

    console.log("Register Success:", data);

    return data;

  } catch (error) {

    console.log("Register Error:", error);

  }
};