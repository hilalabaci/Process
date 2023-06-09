import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  RegisterContainer,
  Form,
  RegisterTitle,
  RegisterInputs,
  GlobalStyle,
} from "./styles";
import {
  BrandContainer,
  BrandIcon,
  BrandTitle,
  StyledLink,
} from "../login/styles";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    fullName: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setRegister((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (register.fullName === "") {
      setError({
        fullName: "Please enter your full name",
      });
      return;
    }
    if (register.email === "") {
      setError({
        email: "E-mail is required",
      });
      return;
    }

    if (register.password < 12) {
      setError({
        password: "Password must be at least 6 characters long.",
      });
      return;
    }
    if (register.password !== register.confirmPassword) {
      setError({
        confirmPassword:
          "The passwords you entered do not match. Please check and try again.",
      });
      return;
    }
    const { fullName, email, password } = register;
    const registerData = { fullName, email, password };
    const response = await fetch(process.env.REACT_APP_API_URL + "register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    if (response.status === 400) {
      setError(jsonResponse);
      console.log("Please check your details");
      return;
    }
    setUser(jsonResponse);
    navigate("/");
  };
  return (
    <MainContainer>
      <GlobalStyle />
      {
        <BrandContainer>
          <BrandIcon src="/icons/brand.png" alt="" />
          <BrandTitle>PROCESS</BrandTitle>
        </BrandContainer>
      }
      <RegisterContainer>
        <Form action="" method="post" onSubmit={handleSubmit}>
          <RegisterInputs>
            <RegisterTitle>Registration</RegisterTitle>
            <Input
              title="Full Name"
              type="text"
              placeholder="Enter your fullname "
              value={register.fullName}
              onChange={handleChange}
              name="fullName"
              error={error.fullName}
            />
            <Input
              title="Email Address"
              type="text"
              placeholder="Enter your email address "
              value={register.email}
              onChange={handleChange}
              name="email"
              error={error.email}
            />
            <Input
              title="Password"
              type="Password"
              placeholder="Enter your password "
              value={register.password}
              onChange={handleChange}
              name="password"
              error={error.password}
            />
            <Input
              title="Confirm Password"
              type="Password"
              placeholder="Confirm your password"
              value={register.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              error={error.confirmPassword}
            />
            <Button value="JOIN NOW" type="submit" />

            <div>
              <StyledLink to="/login">
                Have already an account Login here
              </StyledLink>
            </div>
          </RegisterInputs>
        </Form>
      </RegisterContainer>
    </MainContainer>
  );
}
export default Register;
