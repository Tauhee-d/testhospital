import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';


const Footer = ({ src1 }) => {
    return (

        <div className="container p-4" id='contactUs'>
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <img src={src1} alt="" width="150" height="100" />

                    <h6>Registered office location</h6>
                    <p> Lorem ipsum dolor sit</p>
                    <p> Lorem ipsum dolor sit</p>
                    <p> Lorem ipsum dolor sit</p>
                    <hr />
                    <h6>Physical office location</h6>
                    <p> Lorem ipsum dolor sit</p>
                    <p> Lorem ipsum dolor sit</p>
                    <p> Lorem ipsum dolor sit</p>
                </div>



                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">Our Products</h5>

                    <ul className="list-unstyled">
                        <li className='linkTag'><a href="#Nvcore" className="text-blue">NV-Core</a></li>
                        <li className='linkTag'><a href="#Vtrack" className="text-blue">V-Track</a></li>
                        <li className='linkTag'><a href="#Vitals" className="text-blue">Vitals</a></li>
                        <li className='linkTag'><a href="#cpap" className="text-blue">CPAP</a></li>


                    </ul>
                </div>

            </div>
            <div className="icons">
                <p>Come join us at</p>

                <a href='https://www.facebook.com/people/Yantram-Medtech-Pvt-Ltd/100078138813384/'> <AiFillFacebook size='40px' /></a>
                <a href='https://twitter.com/YantramM'> <AiFillTwitterSquare size='40px' /></a>
                <a href='https://www.instagram.com/yantram.medtech/'> <AiFillInstagram size='40px' /></a>
                <a href='https://www.linkedin.com/company/yantram-medtech-private-limited/'> <AiFillLinkedin size='40px' /></a>
                <a href='https://www.youtube.com/channel/UClbfjSeVUFHKDzTx0tb6bjg'> <AiFillYoutube size='40px' /></a>

            </div>

        </div>
    )
}
export default Footer