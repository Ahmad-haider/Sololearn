import React from 'react'
import Header from '../components/header'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Img from '../public/IMAGE.ico'
import Img1 from '../public/IMAGE-1.ico'
import Img2 from '../public/IMAGE-2.ico'
import Img3 from '../public/IMAGE-3.ico'
import Img4 from '../public/IMAGE-4.ico'
import Img5 from '../public/IMAGE-5.ico'
import Img6 from '../public/IMAGE-6.ico'
import Img7 from '../public/IMAGE-7.ico'
import Img8 from '../public/IMAGE-8.ico'
import Facebook from '../public/Facebook.ico'
import Linkedin from '../public/Linkedin.ico'
import Twiter from '../public/twiter.ico'
import { useState } from 'react'

export default function Blog() {


    const [appear, setappear] = useState(false)
    const [Bappear, setBappear] = useState(true)

    const showhandler = () => {


setappear(true)
setBappear(false)


    }


    return (



        <>

            <title>Sololearn</title>

            <Header />

            <main className=''>

                <div className='d-flex justify-content-center'>
                    <p style={{ fontSize: '7vh', paddingTop: '5vw', }} className='d-flex justify-content-center fw-5'>Blog</p>

                </div>

                <div className='d-flex justify-content-center mb-5 pb-5' >

                    <Button variant="" className='btn  px-4  text-light rounded-2 mx-1 ' style={{ backgroundColor: '#72B749', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'center', }}>All</Button>
                    <Button variant="" className='btn  px-4  text-light rounded-2 mx-1 ' style={{ backgroundColor: '#57B99E', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'center', }}>Learn To Code</Button>
                    <Button variant="" className='btn  px-4  text-light rounded-2 mx-1 ' style={{ backgroundColor: '#DF6C38', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'center', }}>Career Development</Button>
                    <Button variant="" className='btn  px-4  text-light rounded-2 mx-1 ' style={{ backgroundColor: '#44ACE4', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'center', }}>Insights</Button>
                    <Button variant="" className='btn  px-4  text-light rounded-2 mx-1 ' style={{ backgroundColor: '#EFA265', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'center', }}>Company News</Button>


                </div>



                <div className='' style={{ border: 0, }}  >


                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5  " style={{ border: 0, paddingLeft: '15vw', paddingRight: '5vw', width: '90%', }}>


                        <div className="col " style={{ border: 0, }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body ">

                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>

                                    <p className="card-text">A handy guide for going back to school (even if you’re not ready for it)</p>
                                </div>

                            </div>
                        </div>
                        <div className="col" style={{ border: 0, }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img1} className="card-img-top mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">Ready to rise up our Leaderboard? Get rewarded for learning!</p>
                                </div>

                            </div>
                        </div>
                        <div className="col" style={{ border: '', }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img2} className="card-img-top mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">Exploring Docker.</p>
                                </div>

                            </div>
                        </div>

                    </div>





                    <div className="row row-cols-1 row-cols-md-3 g-4  mb-5 pb-5 " style={{ border: 0, paddingLeft: '15vw', paddingRight: '5vw', width: '90%', }}>


                        <div className="col " style={{ border: 0, }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img3} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">How To Break Into Data Science</p>
                                </div>

                            </div>
                        </div>
                        <div className="col" style={{ border: 0, }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img4} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">Why Is Python So Huge In Finance?</p>
                                </div>

                            </div>
                        </div>
                        <div className="col" style={{ border: '', }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img5} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">3 Languages You Should Know To Become An Android Developer</p>
                                </div>

                            </div>
                        </div>

                    </div>






                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5 " style={{ border: 0, paddingLeft: '15vw', paddingRight: '5vw', width: '90%', }}>


                        <div className="col " style={{ border: 0, }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img6} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">10 Basics of JavaScript</p>
                                </div>

                            </div>
                        </div>
                        <div className="col" style={{ border: 0, }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img7} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">What Is Business Intelligence?</p>
                                </div>

                            </div>
                        </div>
                        <div className="col" style={{ border: '', }} >
                            <div className="card h-100 border border-0">
                                <Image src={Img8} className="card-img-top  mb-4" alt="..." />
                                <div className="card-body">
                                    <p style={{ color: '#57B99E', }}>August 24, 2022</p>
                                    <p className="card-text">3 Languages You Should Know To Become A Website Developer</p>
                                </div>

                            </div>
                        </div>

                    </div>



                </div>


                <hr />


                <div className='pt-4'>

                  {Bappear?  <div className='d-flex justify-content-center'>

                        <Button onClick={showhandler} variant="" className='btn  px-4   rounded-2 mx-1 mb-5  ' style={{ borderColor: '#57B99E', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'center', color: '#57B99E', }}>LOAD MORE</Button>
                    </div>:''}


                {appear? <div className=''>
                        <p className='text-align-left fs-5 py-2' style={{ paddingLeft: '15vw', }}>Student life can be stressful, but if you take care of yourself and use all the tools and <br /> resources at your disposal, it doesn’t have to be quite as hard.</p>

                        <p className='text-align-left fs-5 py-2' style={{ paddingLeft: '15vw', }}>At Sololearn, we’re on a mission to make learning fun and possible for anyone, anywhere. We <br /> use learning science to help you master everything from the basics of Python, to coding <br /> for marketers, to machine learning.</p>

                        <p className='text-align-left fs-5 py-2' style={{ paddingLeft: '15vw', }}>So if you need help in your student journey, we’re here for you!</p>

                        <div className='d-flex' style={{ paddingLeft: '15vw',  }}>

                   
                        <Button  variant="" className='btn  px-4   rounded-2  mb-5  ' style={{ borderColor: 'white', padding: '0.5vw', fontSize: '2vh', marginTop: '5vh', textAlign: 'left', color: '#57B99E', }}>Share</Button>

                     <a href="">  <Image src={Facebook} className=" mx-2 mt-5 " alt="..."   style={{width:'5vh',}}/></a> 

                      <a href="">  <Image src={Linkedin} className=" mx-2 mt-5  " alt="..."  style={{width:'5vh',}} /></a>

                      <a href="">  <Image src={Twiter} className=" mx-2 mt-5 " alt="..." style={{width:'5vh',}} /></a>



                   </div>

                    </div>:''}

                </div>

            </main>


            <Footer/>


        </>


    )
}
