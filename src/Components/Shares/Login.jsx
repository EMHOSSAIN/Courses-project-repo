import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const handlelogin = event=>{
    event.preventDefault()
    const Form = event.target;
    const email = Form.email.value;
    const password = Form.password.value;
    console.log(email,password)
    login(email,password)
    .then(Result=>{
      const user = Result.user
      console.log(user)
      navigate('/home')
    })
    .catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage)
      

    })

    
  }
  
 
    return (
      <>
        <Form onSubmit={ handlelogin} className='w-50 m-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
            <p>Don't have an account? Go <Link to='/signup'>SignUp</Link> </p>
      <Button variant="primary" type="submit">
       Login
      </Button>
     
    </Form>
   
    </>
    );
};

export default Login;