//import axios from "axios";
import axios from './api/axios.js';

export const loginCall = async (userCredential, dispatch, callback) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("api/auth/login", userCredential);
    console.log({res})
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    callback();
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
    
};

