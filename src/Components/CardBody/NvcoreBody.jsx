import React from 'react'
import CardBody from '../CardBody'
import Image from '../../Images/Image1.jpeg'
import Nvcore from '../BodyDescription/Nvcore'
import KeyFeature from '../KeyFeatures'
import NvcoreKey from '../KeyFeatures/NvcoreKey'
import Inference from '../Inference'
import NvcoreInference from '../Inference/NvcoreInf'

function NvcoreBody() {
    return (

        <div className='shadow p-3 mb-5 bg-body rounded' id='mainContainer' >
            <CardBody src1={Image} heading="NV-Core" id="Nvcore" Description={<Nvcore />} />
            <KeyFeature body={<NvcoreKey />} />
            <div className="youtube">

                <div className="ratio ratio-16x9" >
                    <iframe src="https://youtube.com/embed/JtjKnw9wNuY" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <Inference title={'Inference'} body={<NvcoreInference />} />


        </div>
    )
}

export default NvcoreBody