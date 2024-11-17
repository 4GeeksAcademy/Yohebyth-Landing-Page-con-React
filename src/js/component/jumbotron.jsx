import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                    Jumbotron personalizado
                </h1>
                <p className="col-md-8 fs-4">
                    Con una serie de utilidades, puedes crear este jumbotron, igual que el de las versiones anteriores de Bootstrap. Consulta los ejemplos a continuación para saber cómo puedes modificarlo y cambiarle el estilo a tu gusto.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Botón de ejemplo
                </button>
            </div>
        </div>
    )
}

export default Jumbotron;