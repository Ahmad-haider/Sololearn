import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import logo from '../public/Frame.ico'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Usesignin from '../customhook/signuphook'





const header = () => {


  const{


    changing,
    setchanging,
    signuphandler
    
 
 
 } = Usesignin()

const router = useRouter()




  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href={''} onClick={() => router.push('/')}><Image src={logo} alt=''></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" className='fs-5 mx-3 fw-semibold'>Leaderboard</Nav.Link>
            <Nav.Link href="" className='fs-5 mx-2 fw-semibold' >Courses</Nav.Link>
            <Nav.Link href="" className='fs-5 mx-2 fw-semibold' >Discuss</Nav.Link>
            <Nav.Link href="" className='fs-5 mx-2 fw-semibold ' >Blog</Nav.Link>
           
          
          </Nav>

        
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


export default header

