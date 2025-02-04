import React from 'react';
import '../componentes/Encabezado.css';
const Encabezado = () => {
    return (
        <header>
            <div className="logo">
                {/* Imagen del logo ubicada en la carpeta public/imagenes */}
                <img src="../imagenes/logo.jpg" alt="Logo" />
            </div>
            <nav>
                {/* Enlaces de navegación */}
                <a href="/home">Inicio</a>
                <a href="/servicios">Servicios</a>
                <a href="/contacto">Contacto</a>
                <a href='/Login'>Login</a>
                <a href='/registro'>Resgistrarse</a>
            </nav>
        </header>
    );
};

export default Encabezado;
