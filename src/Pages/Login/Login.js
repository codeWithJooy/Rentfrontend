import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return <div className="mainEntry"></div>;
};

export default Login;
