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
import NvcoreBody from '../Components/CardBody/NvcoreBody'
import VtrackBody from '../Components/CardBody/VtrackBody'
import VitalsBody from '../Components/CardBody/VitalsBody'
import CpapBody from '../Components/CardBody/CpapBody'


const Home = () => {
    return (
        <div className="body">

            <Navbar src1={Img} />
            <Carousel src1={Carousel1} src2={Carousel2} />
            <Cards src1={Image1} src2={Image2} src3={Image3} src4={Image4} />
            <NvcoreBody />
            <VtrackBody />
            <VitalsBody />
            <CpapBody />
            <Footer src1={Img} />

        </div>
    )
}
export default Home
