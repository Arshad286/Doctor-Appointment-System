import React from "react";
import { Form, Input, message } from "antd";
import "../styles/signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        values
      );

      if (response.data.success) {
        message.success("Login Successfully");
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h1>Login Page</h1>
        <Form layout="vertical" onFinish={onfinishHandler}>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <Link to="/signup">Create new Account</Link>
        </Form>
      </div>
    </>
  );
};

export default login;
