import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Img from '../public/Group.ico'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';

export default function leaderIntro() {



    return (
        <>

            <Header />

            <main>





                <div className='col-12  z-2  flex-direction-column ' style={{ background: '#2D3846', paddingTop: '5%', borderColor: '#2D3846', margin: '0px', }}>

                <h4 className='pb-5 pt-3 text-light  d-flex justify-content-center' style={{}}>Leaderboard</h4>
 
                    <div className='d-flex justify-content-center' style={{background: '#2D3846',}}>

                        

                        <div className='z-1 d-flex justify-content-center ' style={{ width: '60vh', }}>




                            <div className="col " style={{ border: 0, }} >
                                <div className="card h-100 border border-0 rounded-0 d-flex justify-content-center" >
                                    <Image src={Img} className="card-img-top my-4 " alt="..." style={{ width: '50%', height:'80%', display: "flex", alignSelf: 'center', marginTop: '2vh', }} />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>






                <div className='z-1 d-flex justify-content-center' style={{ background: '#F2F5F7', paddingBottom: '18%', }}>

                    <div className="col d-flex justify-content-center " style={{ border: 0, }} >
                        <div className="card h-100 border border-0  " style={{ width: '60vh', }}>

                            <div className="card-body rounded-0 text-align-center " style={{ textAlign: 'center', }} >

                                <h4 className='pb-3 pt-3' style={{}}>Want to rejoin the Leaderboard?</h4>

                                <p className="card-text text-align-center">Show the world that you’re a star coder! <br /> Earn the most XP each week to move up <br /> a league and earn rewards.</p>


                                <Button variant="" className='  my-4 px-5  text-light rounded-2 ' style={{ backgroundColor: '#2493DF', padding: '1vw', fontSize: '2vh', textAlign: 'center', }}>Enable Leaderboard</Button>

                            </div>

                        </div>
                    </div>
                </div>





            </main>


         
        </>
    )
}
