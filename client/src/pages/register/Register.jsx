import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { axiosInstance } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [fieldValid, setFieldValid] = useState(true);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  var isFieldValid = true;
  const handleChange = (e) => {
     if (e.target.id === "email") {
      const re = /\S+@\S+\.\S+/;
      isFieldValid = re.test(e.target.value);
      console.log(isFieldValid);
      if (isFieldValid === false) {
        setCredentials((prev) => ({ ...prev, [e.target.id]: "" }));
        setFieldValid(false);
      }
    } else if (e.target.id === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const re = /\d{1}/;
      const passwordHasNumber = re.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      if (isFieldValid === false) {
        setCredentials((prev) => ({ ...prev, [e.target.id]: "" }));
        setFieldValid(false);
      }
    }
    if (isFieldValid) {
      const newUserInfo = { ...credentials };
      newUserInfo[e.target.id] = e.target.value;
      setCredentials(newUserInfo);
      setFieldValid(true);
      // console.log(user);
    }
  };

  const register = async (e) => {
    console.log("hitted")
   // e.preventDefault();

    dispatch({ type: "REGISTER_START" });
    try {
      if (credentials?.email && credentials?.password) {
      
        const res = await axiosInstance.post("/auth/register", credentials);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
        navigate("/login");
        setFieldValid(true);
      } else {
        setFieldValid(false);
      }
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.res });
    }
  };

  let errMsg = "";
  if (error?.status === 400) {
    errMsg = "Please enter a valid email";
  } else {
    errMsg = "Sorry username or Email Already in use";
  }
 // console.log(credentials);
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="regContainer">
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="regInput"
          />
          <input
            required
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="regInput"
          />
          <input
            type="text"
            placeholder="Country"
            id="country"
            onChange={handleChange}
            className="regInput"
          />
          <input
            type="text"
            placeholder="City"
            id="city"
            onChange={handleChange}
            className="regInput"
          />
          <input
            type="tel"
            placeholder="Phone"
            id="phone"
            onChange={handleChange}
            className="regInput"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="regInput"
          />

          {!fieldValid && (
            <p className="text-danger">
              Please enter valid email address and password, password Length
              Should be at least 6 and one number{" "}
            </p>
          )}

          <button disabled={loading} onClick={register} className="regBtn">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
