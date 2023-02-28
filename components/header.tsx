import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import logo from '../public/Frame.ico'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Usesignin from '../pages/sign_in'




const header = () => {



 
 
 
 const router = useRouter()







  return (


    
    <div>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href={''} onClick={() => router.push('/')}><Image src={logo} alt=''></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" className='fs-5 mx-3 fw-semibold' onClick={() => router.push('./leaderIntro')}>Leaderboard</Nav.Link>
            <Nav.Link href="" className='fs-5 mx-2 fw-semibold' >Courses</Nav.Link>
            <Nav.Link href="" className='fs-5 mx-2 fw-semibold' onClick={() => router.push('./contact')} >Contact</Nav.Link>
            <Nav.Link href="" className='fs-5 mx-2 fw-semibold '  onClick={() => router.push('./Blog')} >Blog</Nav.Link>
           
          
          </Nav>

     <div className='d-flex '> <Nav.Link    onClick={() => router.push('./sign_in')} className='fs-5 mx-2 fw-semibold btn p-2 ' style={{backgroundColor:'#FFA310',}} > Register Now!</Nav.Link>
          <Nav.Link href="./login" className='fs-5 mx-2 fw-semibold '  onClick={() => router.push('./login')} >Login</Nav.Link> </div>
        
         
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


export default header

