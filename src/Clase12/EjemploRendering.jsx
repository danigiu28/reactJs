import { useEffect } from "react";
import { useState } from "react"


const EjemploRendering = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {loading ? <h1 className="text-danger">Cargando...</h1> : <h1 className="text-success">Contenido Listo!!!</h1>}          </div>
            </div>
        </div>
    )
}

export default EjemploRendering