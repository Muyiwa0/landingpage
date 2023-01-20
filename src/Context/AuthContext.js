import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import axiosInstance from "../axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();

  let handleuserLogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login/", { email, password })
      .then((res) => {
        setLoading(true);
        console.log(res, res.data.refresh_token);
        // localStorage.setItem("access_token", res.data.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("access_token")}`;
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("access_token")}`;
        localStorage.setItem("refresh_token", res.data.refresh_token);

        navigate("/dashboards");
        console.log("login success");
      })
      .catch((err) => {
        console.log(err);
        setError("Invalid Email or Password");
      });
  };

  let contextData = {
    email: email,
    setEmail: setEmail,
    password: password,
    setPassword: setPassword,
    error: error,
    setError: setError,
    handleuserLogin: handleuserLogin,
    loading: loading,
    setLoading: setLoading,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
