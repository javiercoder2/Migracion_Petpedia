import React from 'react';
import "./Foro.css";

const Body2 = () => {
    return (
        <><><div className="carousel-inner"></div><div className="carousel-item active">
            <div className="mask" style={{ backgroundColor: 'rgb(255, 140, 114)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                        <h1 className="mb-5">PetPedia</h1>
                        <h5 className="mb-4">Tu mascota en las manos de todos</h5>
                        <a className="btn btn-outline-light btn-lg m-2" href="Mision.html" target="_blank" style={{ backgroundColor: 'rgb(82, 122, 92)' }} role="button">Busca lo que necesites</a>
                    </div>
                </div>
            </div>
        </div></><div className="card-group">
                <div style={{ backgroundColor: 'rgb(255, 219, 159)' }} className="card">
                    <img src='images/MascotasHD7.webp' className="card-img-top" alt={100} />
                    <div className="card-body">
                        <h5 className="card-title">Publicacion 1</h5>
                        <p className="card-text">Buena veterinaria, calificaciones buenas</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: 'rgb(255, 219, 159)' }}>
                    <img src='images/MascotasHD6.webp' className="card-img-top" alt={100} />
                    <div className="card-body">
                        <h5 className="card-title">Publicacion2</h5>
                        <p className="card-text">Otro ejemplo de comentario de veterinarias</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: 'rgb(255, 219, 159)' }}>
                    <img src='images/MascotasHd7.webp' className="card-img-top" alt={100} />
                    <div className="card-body">
                        <h5 className="card-title">Publicacion 3<p />
                            <p className="card-text">Otro ejemplo de comentario de veterinarias</p>
                        </h5></div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div><div className="container-fluid">
            </div><section>
                <div style={{ backgroundColor: 'rgb(82, 122, 92)' }} className="row ">
                    <div className="col-md-6 gx-5 mb-4">
                        <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                            <img className="rounded" src='images/MasctoasHd5.webp' height={350} width={550} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 gx-7 mb-4">
                        <h4><strong>?Tu mascota esta enferma y no sabes que hacer?</strong></h4>
                        <p>
                            Mucha gente no sabe donde acudir ni que hacer en momentos cruciales para la mascota y tienden a cometer errores
                        </p>
                        <p><strong>¿Te sucede esto mismo?</strong></p>
                        <p>
                            Unetenos en esta experiencia comunitaria donde el, ella , yo y tu somos participes
                        </p>
                    </div>
                </div>
            </section><div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="mask" style={{ backgroundColor: 'rgb(255, 140, 114)' }}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white text-center">
                                <h1 className="mb-5" />
                                <h5 className="mb-4" />
                            </div>
                        </div>
                    </div>
                </div><div></div></div></>
                    );
    }
                    export default Body2;