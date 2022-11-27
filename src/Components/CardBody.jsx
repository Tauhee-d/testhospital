import React from "react";
const CardBody = ({ src1, heading, id, Description }) => {
    return (
        <>
            <div className="Cardbody" id={id} >

                <div className="row" >
                    <div className="col-sm-6">
                        <img className="cardImg" src={src1} alt="" width={500} height={300} />
                    </div>
                    <div className="col-sm-6">
                        <h3 style={{ marginTop: '30px', marginRight: '450px' }}>{heading}</h3>
                        <p className="paragraph">

                            {Description}
                        </p>
                    </div>
                </div>
                <hr className="hr" />


            </div>
        </>
    );
};
export default CardBody;
// import React from "react";
// const CardBody = ({ src1, heading, id, Description }) => {
//     return (
//         <>

//             <div className="cardbody">
//                 <h2>hii</h2>
//             </div>
//         </>
//     );
// };
// export default CardBody;
