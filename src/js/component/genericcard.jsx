import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"

const GenericCard = ({ image, title, description }) => {
    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>
        </div>
    )
}

export default GenericCard;