import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function contact() {
  return (
   <>

   <Header/>

   <main style={{background: '#F2F2F2', width:'100%', height:'100%' , paddingTop: '20vh',}}>
   
   <div className='d-flex   justify-content-center ' style={{  alignItems: 'center',  }}>

<div className=' mb-5 rounded-3 p-5 bg-white shadow-sm' style={{ alignContent: 'center',  }}>

  

  


      <Form>
         

         <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '70vw', }}>
            <Form.Label style={{ color: '#666666' }}>Name</Form.Label>
            <Form.Control type="text" placeholder="" required />
          
         </Form.Group>


         <Form.Group className="mb-4" controlId="formBasicEmail" style={{ width: '70vw', }}>
            <Form.Label style={{ color: '#666666' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="" required />

         </Form.Group>

       
         <FloatingLabel controlId="floatingTextarea2 " label="Comments" className='mb-4'>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          required
        />
      </FloatingLabel>

      <button type="submit" className="btn btn-primary">Submit</button>
       
      </Form>

    


   </div>


  


</div>


<div className='d-flex   justify-content-center ' style={{  alignItems: 'center',  }}>

<div className=' mb-5 rounded-3 p-3 bg-white shadow-sm' style={{  width:'76vw', }}>



<p style={{ fontSize: '5vh',  textAlign:'left', }} className=' p-3'>Sololearn Inc.</p>

<p className=' px-3'>535 Mission Street, Suite 1591,</p>
<p className='px-3 mb-5'>San Francisco, CA 94105</p>

<p className='p-3'>Twitter: <a href="" style={{color: '#1FBBA6'}}>@Sololearn</a></p>
<p className='p-3'>Facebook: <a href="" style={{color: '#1FBBA6'}}>http://www.facebook.com/Sololearn/</a></p>
<p className='p-3'>Media and Partnership Enquiries, Support: <a href="" style={{color: '#1FBBA6'}}>info@sololearn.com</a></p>




</div>
</div>



</main>

 <Footer/>
   
   </>
  )
}
