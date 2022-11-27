import React from 'react'
const KeyFeature = ({ body }) => {
    return (
        <>
            <div className="FeaturesContainer">

                <div className="Features">
                    <h3 style={{ marginTop: '20px' }}><strong>key Features</strong></h3>
                    {body}
                </div>
            </div>
        </>
    )
}
export default KeyFeature