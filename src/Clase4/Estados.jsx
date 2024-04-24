import { useState } from "react";

const Estados = () => {
    //En los states (estados) únicamente su función modificadora podra puede modificar el valor de los estados
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Fabio");
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [curso, setCurso] = useState("JavaScript");

    function aumentar() {
        setContador(contador + 1);
        setNombre("Jessica");
        setNuevoNombre("Kevin");
        setCurso("React JS");
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>States (Estados)</h1>
                    <p><button className="btn btn-primary" onClick={aumentar}>Aumentar</button></p>
                    <p>Contador: {contador}</p>
                    <p>Nombre: <b>{nombre}</b></p>
                    <p>Nuevo Nombre del Bebé: <b>{nuevoNombre}</b></p>
                    <p>Curso: <b>{curso}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Estados;