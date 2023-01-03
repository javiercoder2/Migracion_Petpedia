import React from 'react';
import "./Foro.css";

const Formulario = () => {
    return (
        <><hr className="my-12" style={{ backgroundColor: 'rgb(138, 183, 79)' }} />
        <section className="mb-5">
            <h4 className="mb-5 text-center"><strong>Favor ingresar tus datos</strong></h4>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form3Example1" className="form-control" />
                                <label className="form-label" htmlFor="form3Example1">Nombre</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form3Example2" className="form-control" />
                                <label className="form-label" htmlFor="form3Example2">Apellido</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" />
                        <label className="form-label" htmlFor="form3Example3">Dirección  de Correo Electrónico</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" />
                        <label className="form-label" htmlFor="form3Example4">Contraseña</label>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" defaultChecked />
                        <label className="form-check-label" htmlFor="form2Example3">
                            Para suscribirte a nuestro Newsletter
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                        Ingresar/Crear Usuario
                    </button>
                </div>
            </div><div></div>

                    </section>
                    </>
            );
        }
       
export default Formulario;