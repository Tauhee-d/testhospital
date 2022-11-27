import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import Img from '../../src/Images/medtech.jpeg'
import Carousel from '../Components/Carousel'
import Carousel1 from '../../src/Images/Carousel1.jpg'
import Carousel2 from '../../src/Images/Carousel2.jpg'
import Cards from '../Components/Cards'
import CardBody from '../Components/CardBody'
import KeyFeature from '../Components/KeyFeatures'
import Inference from '../Components/Inference'
import Footer from '../Components/Footer'
import Image1 from '../../src/Images/Image1.jpeg'
import Image2 from '../../src/Images/Image2.jpeg'
import Image3 from '../../src/Images/Image3.jpeg'
import Image4 from '../../src/Images/Image4.jpeg'
import Image5 from '../../src/Images/Image5.jpeg'
import Nvcore from '../Components/BodyDescription/Nvcore'
import Vtrack from '../Components/BodyDescription/Vtrack'
import Vitals from '../Components/BodyDescription/Vitals'
import Cpap from '../Components/BodyDescription/Cpap'
import NvcoreInference from '../Components/Inference/NvcoreInf'
import VtrackInference from '../Components/Inference/VtrackInf'
import CpapInference from '../Components/Inference/CpapInf'
import NvcoreKey from '../Components/KeyFeatures/NvcoreKey'
import VtrackKey from '../Components/KeyFeatures/VtrackKey'
import VitalsKey from '../Components/KeyFeatures/VitalsKey'
import CpapKey from '../Components/KeyFeatures/CpapKey'


const Home = () => {
    return (
        <div className="body">

            <Navbar src1={Img} />
            <Carousel src1={Carousel1} src2={Carousel2} />
            <Cards src1={Image1} src2={Image2} src3={Image3} src4={Image4} />
            <CardBody src1={Image1} heading="NV-Core" id="Nvcore" Description={<Nvcore />} />
            <KeyFeature body={<NvcoreKey />} />
            <div className="youtube">

                <div className="ratio ratio-16x9" >
                    <iframe src="https://youtube.com/embed/JtjKnw9wNuY" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <Inference title={'Inference'} body={<NvcoreInference />} />
            <CardBody src1={Image2} heading="V-Track" id="Vtrack" Description={<Vtrack />} />
            <KeyFeature body={<VtrackKey />} />
            <div className="youtube">

                <div className="ratio ratio-16x9" >
                    <iframe src="https://youtube.com/embed/KmHqIfE3J4I" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <Inference title={'Mobile App Features'} body={<VtrackInference />} />
            <CardBody src1={Image3} heading="Vitals" id="Vitals" Description={<Vitals />} />
            <KeyFeature body={<VitalsKey />} />
            <CardBody src1={Image4} heading="CPAP" id="cpap" Description={<Cpap />} />
            <KeyFeature body={<CpapKey />} />
            <div className="image">
                <img src={Image5} alt="" srcset="" height='20%' width='84%' />
            </div>
            <Inference title={'Inference'} body={<CpapInference />} />
            <Footer src1={Img} />

        </div>
    )
}
export default Home
