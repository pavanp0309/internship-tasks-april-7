import React from 'react'
import { Button, Form, Input,  } from "antd";

const ForgotPassword = () => {
  return (
    <div className='container my-3 p-3  rounded shadow' style={{background:"rgba(85, 239, 196,1.0)"}}>
        <Form layout={"vertical"}>
        <Form.Item label="Email" name={""} >
              <Input placeholder="enter ur reset email" autoComplete={"off"} />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" block loading={''}>Login</Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default ForgotPassword
