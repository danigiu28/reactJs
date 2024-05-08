import { useEffect, useState } from "react";
import Intercambiabilidad from "./Intercambiabilidad";
import Abstraccion1 from "./Abstraccion1";
import Abstraccion2 from "./Abstraccion2";


const Eventos = () => {
    const [texto, setTexto] = useState("");

    const saludar = () => {
        setTexto("Hola! Bienvenidos al Curso de React Js!")
    }

    function onResize() {
        console.log("Hiciste un redimensionamiento en la ventana del navegador!");
    }
    
    //window.addEventListener("resize", onResize);

    // Utilice un Efecto para desregistrar el evento onResize por medio de su función clean-up
    /* useEffect(() => {
        return () => {
            console.log("Desmontaje del Componente");
            window.removeEventListener("resize", onResize);
        }
    }) */

    const capturarEvento = (e) => {
        console.log(e.nativeEvent); //Me devuelve toda la información de forma nativa de Javascript
    }

    const ejecutarFn = (e) => {
        e.preventDefault();
        console.log("Validación de los campos de un formulario");
        console.log("Disparar formulario");
        //document.getElementById("form1").submit(); //Envío el formulario
    }

    const mostrarTexto = (evento) => {
        console.log(evento.nativeEvent);

        if (evento.key != "a" && evento.key != "e" && evento.key != "i" && evento.key != "o" && evento.key != "u") {
            setTexto(evento.target.value);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    {/* <button className="btn btn-primary" onClick={saludar}>Hacer Click!</button>
                    <p>{texto}</p>  */}
                    {/* <h2>Synthetic events</h2>
                    <button className="btn btn-primary" onClick={(evento) => capturarEvento(evento)}>Disparar!</button>
                    <form id="form1" method="post" action="">
                        <input type="submit" value="Enviar" onClick={ejecutarFn} />
                    </form> */}
                    {/* <h2>Actividad en Clase</h2>
                    <input type="text" onKeyDown={(evento) => {mostrarTexto(evento)}} />
                    <p>{texto}</p> */}
                    {/* <Intercambiabilidad item={20} inputType="input" /> */}
                    {/* <Abstraccion1 /> */}
                    <Abstraccion2 />
                </div> 
            </div>
        </div>
    )
}

export default Eventos;