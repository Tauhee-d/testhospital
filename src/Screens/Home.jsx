import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import Img from '../../src/Images/medtech.jpeg'
import Carousel from '../Components/Carousel'
import Carousel1 from '../../src/Images/Carousel1.jpg'
import Carousel2 from '../../src/Images/Carousel2.jpg'
import Cards from '../Components/Cards'
import Cards1 from '../../src/Images/Device.jpeg'
import Cards2 from '../../src/Images/Card2.jpeg'
import Cards3 from '../../src/Images/Card3.jpeg'
import Cards4 from '../../src/Images/Card4.jpeg'
import CardBody from '../Components/CardBody'
import KeyFeature from '../Components/KeyFeatures'
import Inference from '../Components/Inference'
import Img1 from '../../src/Images/Img1.jpg'
import Footer from '../Components/Footer'


const Home = () => {
    return (
        <div className="body">

            <Navbar src1={Img} />
            <Carousel src1={Carousel1} src2={Carousel2} />
            <Cards src1={Cards1} src2={Cards2} src3={Cards3} src4={Cards4} />
            <CardBody src1={Cards1} heading="NV-Core" id="#Nvcore" />
            <KeyFeature />
            <div className="youtube">

                <div className="ratio ratio-16x9" >
                    <iframe src="https://youtube.com/embed/JtjKnw9wNuY" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <Inference title={'Inference'} />
            <CardBody src1={Cards2} heading="V-Track" id="Vtrack" />
            <KeyFeature />
            <div className="youtube">

                <div className="ratio ratio-16x9" >
                    <iframe src="https://youtube.com/embed/KmHqIfE3J4I" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <Inference title={'Mobile App Features'} />
            <CardBody src1={Cards3} heading="Vitals" id="Vitals" />
            <KeyFeature />
            <CardBody src1={Cards4} heading="CPAP" id="cpap" />
            <KeyFeature />
            <div className="image">
                <img src={Img1} alt="" srcset="" height='20%' width='84%' />
            </div>
            <Inference title={'Inference'} />
            <Footer src1={Img} />

        </div>
    )
}
export default Home
