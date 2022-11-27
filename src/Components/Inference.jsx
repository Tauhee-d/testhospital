import React from 'react'
const Inference = ({ title, body }) => {
    return (
        <>
            <div className="Inference">
                <h3 style={{ marginRight: '900px' }}>{title}</h3>
                <p >
                    {body}
                </p>
            </div>
        </>
    )
}
export default Inference