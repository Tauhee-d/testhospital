import React from 'react'
import CardBody from '../CardBody'
import Image from '../../Images/Image3.jpeg'
import Vitals from '../BodyDescription/Vitals'
import KeyFeature from '../KeyFeatures'
import VitalsKey from '../KeyFeatures/VitalsKey'

function VitalsBody() {
    return (

        <div className='shadow p-3 mb-5 bg-body rounded' id='mainContainer' >
            <CardBody src1={Image} heading="Vitals" id="Vitals" Description={<Vitals />} />
            <KeyFeature body={<VitalsKey />} />



        </div>
    )
}

export default VitalsBody