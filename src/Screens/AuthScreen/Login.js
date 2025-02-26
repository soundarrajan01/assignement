import React from "react";
import style from "./Login.module.css";
import logoIcon from "../../Asserts/Png/logo.png";
import { Card } from "@mui/material";
import { Button, Col, Input } from "antd";
import { useFormik } from "formik";
import CommonInput from "../../Component/CommonInput";
import { useNavigate } from "react-router";
import { LoginServices } from "../../Api/ApiServices";
export default function Login() {
  const navigate = useNavigate();
  const {
    values,
    setValues,
    setFieldValue,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: () => {
      handleLoginServices();
      localStorage.setItem("userDetails", "userDetails");
      navigate("/dashboard");
      console.log("submit");
    },
  });
  console.log(values.username, "username===");
  const handleLoginServices = () => {
    LoginServices()
      .then((res) => {
        if (res.data.status) {
        } else {
          console.log("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.logincontent}>
          <img src={logoIcon} style={{ width: "250px", height: "230px" }} />
          <Card style={{ width: "40%", padding: "20px", borderRadius: "10px" }}>
            <h2>Log in</h2>
            <p>Welcome to Free Shopps App controller</p>
            <Col>
              <CommonInput
                placeholder="Name"
                value={values.username}
                onChange={handleChange}
                name="username"
                title="User Name"
                errors={errors.username}
              />
            </Col>
            <Col>
              <CommonInput
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                name="password"
                title="Password"
                errors={errors.password}
              />
            </Col>
            <Button
              onClick={handleSubmit}
              title="Login"
              className={style.buttonsty}
            >
              Log In
            </Button>
            {/* <Button style={style.button} title="Log In" /> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
