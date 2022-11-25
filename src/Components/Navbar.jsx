import React from 'react'
// import Img from '../Images/medtech.jpeg'
import './Navbar.css'
// import BiPhoneCall from ''
import { BiPhoneCall } from 'react-icons/bi';

const Navbar = ({ src1 }) => {
    return (
        <>

            <div className="navbar ">
                <div className="container">
                    <img src={src1} alt='something went wrong' width="110" height="80" />
                    <h2>Yantram Medtech</h2>
                    <button className="button">
                        <a className='abutton' href='#contactUs' > <BiPhoneCall />  Contact Us</a>
                    </button>
                </div>
            </div>

        </>
    )
}
export default Navbar

