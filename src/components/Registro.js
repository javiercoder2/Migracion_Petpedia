import React from 'react';
import "./Foro.css";
import "./Funciones.js";

const Registro = () => {
    return (

<main class="container-registro">
    <h1 className="tituloRegistro">Se Parte de Esta Comunidad que Crece Cada Dia Mas Por Nuestras Mascotas </h1>
    <form className="container" id="miformulario" method="get" action="recibimiento.html" onsubmit="validarFormulario(event)">
        <div class="col-12">
            <label for="inputNombre" class="form-label">Nombre Completo</label>
            <input type="text" class="form-control" id="inputNombre" placeholder="Fran" required/>
        </div>
        <div class="col-12">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Fred@hotmail.com" required/>
        </div>
        <div class="col-12">
            <label for="inputDireccion" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="inputDireccion" placeholder="Libertad 5521, Estacion Central" required/>
        </div>
        <div class="col-12">
            <label for="inputRegion" class="form-label">Región</label>
            <select id="inputRegion" class="form-select" onchange="onChangeRegion()">
                <option selected value="0">Escoja una opción...</option>
                <option value="5">sfdsf</option>
                <option value="6">6</option>
                <option value="10">Metropolitana</option>
                <option value="13">13</option>
            </select>
        </div>
        <div class="col-12">
            <label class="form-label">Me identifico como:</label>
            <br />
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="identificacion" value="Mujer"/>
                <label class="form-check-label">Mujer</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="identificacion" value="Hombre"/>
                <label class="form-check-label">Hombre</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="identificacion" value="Otro"/>
                <label class="form-check-label">Otro</label>
            </div>
        </div>

{/*         <div class="col-12">
            <label class="form-label">Validación de anti-robok 🤖</label>
            <div class="row">
                <div class="col-2">
                    <input type="number" class="form-control" id="inputValor1" min="0" max="99"/>
                </div>
                <div class="col-1 text-center">
                    +
                </div>
                <div class="col-2">
                    <input type="number" class="form-control" id="inputValor2" min="0" max="99"/>
                </div>
                <div class="col-1">
                    = 20
                </div>
            </div>
        </div>
        <div class="mb-12">
          <label for="formFile" class="form-label">Agregar Foto</label>
          <input class="form-control" type="file" id="formFile"/>
        </div>

        <div class="col-12 mt-4">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkValidacion" onclick="aceptarClausula()"/>
                <label class="form-check-label" for="checkValidacion">
                    ¿Desea recordar contraseña?
                </label>
            </div>
        </div> */}
        <div class="col-12 mt-5">
            <button type="submit" class="btn btn-primary">Ingresar</button>
        </div>
    </form>
</main>
    );
};

export default Registro;