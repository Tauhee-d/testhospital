import React from 'react'
import CardBody from '../CardBody'
import Image from '../../Images/Image2.jpeg'
import Vtrack from '../BodyDescription/Vtrack'
import KeyFeature from '../KeyFeatures'
import NvcoreKey from '../KeyFeatures/NvcoreKey'
import Inference from '../Inference'
import VtrackInference from '../Inference/VtrackInf'

function VtrackBody() {
    return (

        <div className='shadow p-3 mb-5 bg-body rounded' id='mainContainer' >
            <CardBody src1={Image} heading="V-Track" id="Vtrack" Description={<Vtrack />} />
            <KeyFeature body={<NvcoreKey />} />
            <div className="youtube">

                <div className="ratio ratio-16x9" >
                    <iframe src="https://youtube.com/embed/KmHqIfE3J4I" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <Inference title={'Mobile App Features'} body={<VtrackInference />} />


        </div>
    )
}

export default VtrackBody