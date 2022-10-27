import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Button } from 'react-bootstrap';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Header = () => {
  const navigate = useNavigate()
  const {user, logout,providerLogin}=useContext(AuthContext)

  const handlelogout = ()=>{
    logout()
    .then(()=>{})
    .catch(error=>{
      console.error(error);
    })
  }
  const googleProvider = new GoogleAuthProvider()

  const handleLogingWithGoogle=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user = result.user
      console.log(user);
      navigate('/category')
    })
    .catch(error=>{
      console.log('error',error)
    })

  }

  const githubProvider = new GithubAuthProvider()

  const handleLogingWithgithub=()=>{
    providerLogin(githubProvider)
    .then(result=>{
      const user = result.user
      console.log(user);
      navigate('/category')
    })
    .catch(error=>{
      console.log('error',error)
    })

  }
    return (
     <>
      <Navbar bg="dark" variant="dark">
        <Container>
       
          <Image style={{width:'66px', borderRadius:'30px', margin:'10px' }} src='https://image.shutterstock.com/image-vector/education-logo-design-template-pencil-260nw-1493479949.jpg'/>

         
          <Link className='me-4'  to ='/home'> <h1> Leader <span> Academy</span> </h1>  </Link>
          <Nav className="me-auto">
          <Link  className='me-4' to = '/home'>Home</Link>
          <Link  className='me-4' to = '/blog'>Blog</Link>
          {
            user?.uid?
           
           <>
            <Button onClick={handlelogout} variant="primary">LogOut</Button>
            <h6 style={{color:'white', marginLeft:'10px', textAlign:'center'}} > {user?.displayName} </h6>

            <Image style={{width:'30px',height:'50px', borderRadius:'40px', margin:'10px',marginLeft:'120px' }} src={user?.photoURL}/>
           </>
            :
            <>
             <Link className='me-4' to='login'>Login</Link>
           <Link className='me-4' to= 'signup'>SignUp</Link>
            </>
          }
        
         

          </Nav>
        </Container>
       <div style={{marginRight:"50px", display:"flex"}}>
       <Button onClick={handleLogingWithGoogle} className='me-5' > <FaGoogle/> </Button>
      <Button onClick={ handleLogingWithgithub} > <FaGithub/> </Button>
       </div>
      </Navbar>
     </>
    );
};

export default Header;