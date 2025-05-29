import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container my-5 p-3" >
        <h1 className="text-center text-success text-uppercase">Login Credentials</h1>
      <div className="row p-3 shadow rounded " style={{background:"rgba(85, 239, 196,1.0)"}}>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <img src="/src/assets/login.jpg" alt="" className="login-image " width="100%"  height={"390px"} />
        </div>
        <div className="col-sm-12 col-lg-6 col-md-6">
          {/* login-form */}
        <div className="border border-success p-3">
          <Form layout={"vertical"}>
            <Form.Item label="Email" name={""} >
              <Input placeholder="enter ur email address" />
            </Form.Item>
            <Form.Item label="password" name={""} >
              <Input placeholder="enter ur password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={''}>Login</Button>
            </Form.Item>
          </Form>
          {/* google login button */}
          <Button  onClick={""} block loading={""} type="default">loginwithGoogle</Button>
          {/* links for register and forgotpassword */}
          <div className="mt-3 text-center">
            <p>Dont have an account clik here  to <Link to="" className="fw-bold ">Register</Link> </p>
            <p>forgot the password click here to <Link to="" className="fw-bold">reset password</Link></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
