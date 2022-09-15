export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });

  export const logoutStart = () => ({
    type:"LOGOUT_START",
  });

  export const logoutSuccess = (user) => ({
    type: "LOGOUT_SUCCESS",
    payload: user,
  });
  
  export const LogoutFailure = () => ({
    type: "LOGOUT_FAILURE",
  });
  
  /*export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
  });
  
  export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
  });*/