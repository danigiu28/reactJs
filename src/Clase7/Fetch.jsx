import { useEffect, useState } from "react";

const Fetch = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(respuesta => respuesta.json())
            .then(resultado => {
                //console.log(resultado);
                setProducto(resultado);
            });
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={producto.image} alt={producto.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{producto.title}</h1>
                    <p>${producto.price}</p>
                    <p>${producto.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Fetch;