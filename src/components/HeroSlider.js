import React from 'react';
import {Carousel} from 'react-bootstrap'
import "./Foro.css";


const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <div className='Prueba'>
                    <Carousel.Caption className="Carousel.Caption">
                    <h1 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Tenemos una comunidad para todos</h1>
                    <h4 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Seamos protagonistas</h4>
                    <form className="Prueba2" role="search">
                    <input  type="search" placeholder="Ej: Veterinarias" aria-label="Search" />
                    <button  type="submit" style={{backgroundColor: 'black'}}>Buscar</button>
                    </form>
                 </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4921291/pexels-photo-4921291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                                    <div className='Prueba'>

                    <Carousel.Caption>
                    <h1 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Tenemos una comunidad para todos</h1>
                    <h4 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Seamos protagonistas</h4>
                    <form className="Prueba2" role="search">
                    <input  type="search" placeholder="Ej: Veterinarias" aria-label="Search" />
                    <button  type="submit" style={{backgroundColor: 'black'}}>Buscar</button>
                    </form>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4560155/pexels-photo-4560155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <div className='Prueba'>
                    <Carousel.Caption>
                    <h1 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Tenemos una comunidad para todos</h1>
                    <h4 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Seamos protagonistas</h4>
                    <form className="Prueba2" role="search">
                    <input  type="search" placeholder="Ej: Veterinarias" aria-label="Search" />
                    <button  type="submit" style={{backgroundColor: 'black'}}>Buscar</button>
                    </form>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4918102/pexels-photo-4918102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <div className='Prueba'>
                    <Carousel.Caption>
                    <h1 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Tenemos una comunidad para todos</h1>
                    <h4 className="Prueba3" style={{backgroundColor: 'rgb(255, 140, 114)'}}>Seamos protagonistas</h4>
                    <form className="Prueba2" role="search">
                    <input  type="search" placeholder="Ej: Veterinarias" aria-label="Search" />
                    <button  type="submit" style={{backgroundColor: 'black'}}>Buscar</button>
                    </form>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider;