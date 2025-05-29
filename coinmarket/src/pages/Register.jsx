import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container my-5 p-3" >
        <h1 className="text-center text-success text-uppercase">Register Credentials</h1>
      <div className="row p-3 shadow rounded " style={{background:"rgba(85, 239, 196,1.0)"}}>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <img src="/src/assets/login.jpg" alt="" className="register-image " width="100%"  height={"390px"} />
        </div>
        <div className="col-sm-12 col-lg-6 col-md-6">
          {/* login-form */}
        <div className="border border-success p-3">
          <Form layout={"vertical"}>
            <Form.Item label="FullName" name={""} >
              <Input placeholder="enter ur fullName" autoComplete={"off"} />
            </Form.Item>
            <Form.Item label="Email" name={""} >
              <Input placeholder="enter ur email address" autoComplete={"off"} />
            </Form.Item>
            <Form.Item label="password" name={""} >
              <Input placeholder="enter ur password"  autoComplete={"off"}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={''}>Register</Button>
            </Form.Item>
          </Form>
          {/* google login button */}
          <Button  onClick={""} block loading={""} type="default">loginwithGoogle</Button>
          {/* links for register and forgotpassword */}
          <div className="mt-3 text-center">
            <p> have an account clik here  to <Link to="" className="fw-bold ">login</Link> </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
