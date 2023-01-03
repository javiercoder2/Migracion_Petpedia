import React, { Component } from 'react'


export class CuentaUsuario extends Component {
    continue = e => {
        e.preventDefault();
        this.props.siguienteAccion();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <><div id='MovingForm'>
                <div className="form-container">
                    <img
                        src='images/MascotasHD4.webp'>

                    </img>
                    <div className="containerRegistro">
                        <h1>Cuenta Usuario</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>

                            <input type="text" className="form-control " name="name" onChange={inputChange('name')} value={values.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
                        </div>

                        <br />
                        <div className="text-right">
                            <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div><div id='MovingForm2'>
                <h1>
                </h1>
                </div></>

        )
    }
}

export default CuentaUsuario;