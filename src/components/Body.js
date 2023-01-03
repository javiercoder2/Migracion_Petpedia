import React from 'react';
import "./Foro.css";

const Body = () => {
    return (
        <><hr className="my-5" /><section style={{ backgroundColor: 'rgb(255, 140, 114)' }} className="text-center" /><h4 style={{ backgroundColor: 'rgb(255, 140, 114)' }} className="mb-5"><strong>¿Porqué ser parte de nosotros?</strong></h4><div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src='images/MascotasHD6.webp' className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgb(138, 183, 79)' }} />
                        </a>
                    </div>
                    <div className="card-body" style={{ backgroundColor: 'rgb(255, 219, 159)' }}>
                        <h5 className="card-title">Fácil de contactarnos</h5>
                        <p className="card-text">
                            Puedes alcanzarnos  por correo, teléfono o de manera personal
                        </p>
                        <a href="Index.html" className="btn btn-primary" style={{ backgroundColor: 'rgb(82, 122, 92)' }}>¡Contáctanos!</a>
                    </div>
                </div>
            </div>


            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src='images/MascotasHD6.webp' className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                        </a>
                    </div>
                    <div className="card-body" style={{ backgroundColor: 'rgb(255, 219, 159)' }}>
                        <h5 className="card-title">Entra a nuestros foros</h5>
                        <p className="card-text">
                            Podras revisar casos similares al tuyo y ver comentarios y puntuacion de veterinarias
                        </p>
                        <a href="foros.html" className="btn btn-primary" style={{ backgroundColor: 'rgb(82, 122, 92)' }}>¡Únetenos!</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src='images/MascotasHD6.webp' className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgb(138, 183, 79)' }} />
                        </a>
                    </div>
                    <div className="card-body" style={{ backgroundColor: 'rgb(255, 219, 159)' }}>
                        <h5 className="card-title">Comprometidos</h5>
                        <p className="card-text">
                    Comprometidos con la vida de tu mascota
                        </p>
                        <a href="Mision.html" className="btn btn-primary" style={{ backgroundColor: 'rgb(82, 122, 92)' }}>¡Mision y Vision!</a>
                    </div>
                </div>
            </div>
        </div><div></div></>
           );
           }

export default Body;