import React from "react";

const GenericCard = ({ image, title, description }) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="button">
                    <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>
        </div>
    )
}

export default GenericCard;