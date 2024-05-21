import { useEffect, useState } from "react";
import Loading from "./Loading";
import LoadingPredito from "./LoadingPedrito";

const RenderProductos = () => {
    const productos = [
        {id:1, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2022/6/7/7489323.jpg", precio:119000, stock:10, envioGratis:false, categoria:"urbanas"},
        {id:2, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093665.jpg", precio:119000, stock:10, envioGratis:false, categoria:"urbanas"},
        {id:3, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093705.jpg", precio:119000, stock:10, envioGratis:false, categoria:"lisas"},
        {id:4, nombre:"Zapatillas U AUTHENTIC", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/10/8086489.jpg", precio:85000, stock:10, envioGratis:false, categoria:"lisas"},
        {id:5, nombre:"Zapatillas U CLASSIC SLIP-ON", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/14/8096996.jpg", precio:79000, stock:10, envioGratis:false, categoria:"urbanas"},
        {id:6, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093534.jpg", precio:135000, stock:10, envioGratis:true, categoria:"botitas"},
        {id:7, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/6/5/8449888.jpg", precio:135000, stock:10, envioGratis:true, categoria:"botitas"},
        {id:8, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/11/2/9032443.jpg", precio:79000, stock:10, envioGratis:true, categoria:"botitas"}
    ];

    return (
        <div className="container my-5">
            <div className="row">
                {productos.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card border-0">
                            <img src={item.imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center"><b>{item.nombre}</b><br />${item.precio}</p>
                                <p className="text-center">{item.envioGratis ? <span className="text-white bg-dark p-2">ENVIO GRATIS</span> : ""}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )   
}


const Productos = () => {
    const [espera, setEspera] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEspera(false)
        }, 7000);
    })

    return (
        <>
            {espera ? <LoadingPredito /> : <RenderProductos />}
        </>
    )
}

export default Productos;