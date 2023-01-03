import React, { useState } from 'react';
import "./testimonio.css";


const Testimonio = ({ Posts }) => {
  return (
    <div class="container">
      {Posts.map((post) => (
        <div className='contenedor-testimonio'>
          <img
            className='imagen-testimonio'
            src={post.url}
            alt='Foto de Cori' />

          <div className='contenedor-texto-testimonio'>
            <br></br>
            <br></br>
            <p className='titulo-testimonio'>
              {post.titulo} </p> 



    
          </div>
        </div>

  ))}
  </div>
  )
}

export default Testimonio;