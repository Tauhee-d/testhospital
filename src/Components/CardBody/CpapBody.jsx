import React from 'react'
import CardBody from '../CardBody'
import Image from '../../Images/Image4.jpeg'
import Image1 from '../../Images/Image5.jpeg'
import Cpap from '../BodyDescription/Cpap'
import KeyFeature from '../KeyFeatures'
import CpapKey from '../KeyFeatures/CpapKey'
import Inference from '../Inference'
import CpapInference from '../Inference/CpapInf'


function CpapBody() {
    return (

        <div className='shadow p-3 mb-5 bg-body rounded' id='mainContainer' >
            <CardBody src1={Image} heading="CPAP" id="cpap" Description={<Cpap />} />
            <KeyFeature body={<CpapKey />} />
            <div className="image">
                <img src={Image1} alt="" srcset="" height='20%' width='84%' />
            </div>
            <Inference title={'Inference'} body={<CpapInference />} />



        </div>
    )
}

export default CpapBody