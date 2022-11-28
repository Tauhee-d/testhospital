import React from 'react'

const Cards = ({ src1, src2, src3, src4 }) => {
    return (
        <>
            <div className="row m-5 p-2"  >
                {/* <div className="col-sm-3 rounded-end" >
                    <div className="card">
                        <div className="card-body">
                            <a href="#Nvcore" className="btn">
                                <img className='cardImg' src={src1} alt="" width={250} height={200} />
                                <h5 className="card-title"><strong>NV-Core</strong></h5>

                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="shadow p-0 mb-2 bg-body rounded col-sm-3" >
                    <div className="card">
                        <div className="card-body">
                            <a href="#Nvcore" className="btn">
                                <img src={src1} alt="" width={250} height={200} style={{ borderRadius: "10px" }} />
                                <h5 className="card-title mt-3"><strong>NV-Core</strong></h5>


                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow p-0 mb-2  bg-body rounded col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="#Vtrack" className="btn">
                                <img src={src2} alt="" width={250} height={200} style={{ borderRadius: "10px" }} />
                                <h5 className="card-title mt-3"><strong>V-Track</strong></h5>


                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow p-0 mb-2  bg-body rounded col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="#Vitals" className="btn">
                                <img src={src3} alt="" width={250} height={200} style={{ borderRadius: "10px" }} />
                                <h5 className="card-title mt-3"><strong>Vitals</strong></h5>


                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow p-0 mb-2  bg-body rounded col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="#cpap" className="btn">
                                <img src={src4} alt="" width={250} height={200} style={{ borderRadius: "10px" }} />
                                <h5 className="card-title mt-3"><strong>Protable CPAP</strong></h5>


                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
export default Cards