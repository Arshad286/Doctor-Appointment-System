import React from 'react'
import { Form , Input, message} from 'antd'
import "../styles/signup.css"
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();

    const onfinishHandler = async (values) => {
        try{
    const response = await axios.post('http://localhost:8000/api/signup', values);

      if(response.data.success){
            message.success("Registration Successfylly");
            navigate("/login");
      }else{
        message.error(response.data.message)
      }
    }catch(error){
        console.log(error);
        message.error("Something went Wrong");
    }
    }

  return (
    <div>
        <div className="form-container">
            <h1>Create your Account</h1>
            <Form layout='vertical' onFinish={onfinishHandler} >
                <Form.Item label="Name" name="name">
                    <Input type="text" required/>
                </Form.Item>

                <Form.Item label="Email" name="email">
                    <Input type="email" required/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required/>
                </Form.Item>
                <Link to="/login" className='ms-0'>Already an account</Link>
               <button className='btn btn-primary' type='submit'>Submit</button>
            </Form>
        </div>
    </div>
  )
}

export default Signup