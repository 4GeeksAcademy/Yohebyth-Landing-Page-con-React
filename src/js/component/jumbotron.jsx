import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                Innovaciones y Transformaciones o tecnología transformadora
                </h1>
                <p className="col-md-8 fs-4">
                Las innovaciones tecnológicas, como IA Generativa, Computación Cuántica y XR, están transformando industrias y nuestra interacción con el mundo. El 5G y 6G impulsan IoT y vehículos autónomos, mientras la Ciberseguridad protege datos en un panorama digital emergente.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Botón de ejemplo
                </button>
            </div>
        </div>
    )
}

export default Jumbotron;