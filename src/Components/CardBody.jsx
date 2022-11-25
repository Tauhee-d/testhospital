import React from "react";
const CardBody = ({ src1, heading, id }) => {
    return (
        <>
            <div className="Cardbody" id={id} >

                <div className="row" >
                    <div className="col-sm-6">
                        <img className="cardImg" src={src1} alt="" width={400} height={300} />
                    </div>
                    <div className="col-sm-6">
                        <h3>{heading}</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                            necessitatibus possimus similique voluptatum eos quaerat dolores
                            nulla cumque corrupti modi sunt delectus amet dicta, perferendis
                            sint dignissimos quo aut vero doloribus ex? Soluta praesentium
                            quidem eum, dolorum, corrupti tempore deleniti et ullam inventore
                            aliquid atque natus voluptatibus quisquam maiores deserunt.
                        </p>
                    </div>
                </div>
                <hr className="hr" />


            </div>
        </>
    );
};
export default CardBody;
