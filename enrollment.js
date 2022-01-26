// import React from "react";
import "./enrollment.css";
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import{Link} from "react-router-dom";
import { Form, Input, Button, Checkbox, Card } from 'antd';
import axios from 'axios';
import Qs from 'qs';
import event from 'event';
          

const Enrollment  = () => {
 const onFinish = values => {
     console.log("values: ", values);
     axios.post('/api/register/',values)
         .then(function (response) {
             console.log("response: ", response);
         })
         .catch(err => console.log(err))
     };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'username不能为空' }]}
        wrapperCol={{ span: 8 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'password不能为空' }, {
          min: 6, message: 'password不能少于6个字符',
        }, {
          max: 8, message: 'password不能大于8个字符',
        }]}
        wrapperCol={{ span: 8 }}
       >
      <Input.Password />
      </Form.Item>
      <Form.Item
        label="telephone"
        name="telephone"
        rules={[{ required: true, message: 'telephone不能为空' }, {
          min: 11,
          message: '电话号码为11位',
        }, 
        {
          max: 11, 
          message: '电话号码为11位',
        }, { message: '电话号码只能输入数字', pattern: /^[0-9]+$/ }]}
         wrapperCol={{ span: 8 }}
       >
         <input/>
       </Form.Item>

       <Form.Item 
       label="address"
       name="address"
       rules={[{ required: true, message: 'address不能为空' }]}
       wrapperCol={{ span: 8 }}
       >
      <input/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Email不能为空' }]}
        wrapperCol={{ span: 8 }}
      >
      <Input />
      </Form.Item>

      <Form.Item
        label="QQ"
        name="QQ"
        wrapperCol={{ span: 8 }}
      >
        <Input />
      </Form.Item>      

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

//ReactDOM.render(<Demo />, mountNode);











export default Enrollment 