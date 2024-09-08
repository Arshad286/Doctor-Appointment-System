import React from 'react'
import { Form , Input} from 'antd'
import "../styles/signup.css"
import { Link } from 'react-router-dom'

const login = () => {

  const onfinishHandler = (values) => {
    console.log(values);
}
  return (
    <>
            <div className="form-container">
            <h1>Login Page</h1>
            <Form layout='vertical' onFinish={onfinishHandler} >
                <Form.Item label="Email" name="email">
                    <Input type="email" required/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required/>
                </Form.Item>
               <button className='btn btn-primary' type='submit'>Submit</button>
               <Link to="/signup" >Create new Account</Link>
            </Form>
        </div>
    </>
  )
}

export default login