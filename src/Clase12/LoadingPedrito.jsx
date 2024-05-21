import pedrito from "../../src/assets/images/mapache-pedro.gif";

const LoadingPedrito = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <img src={pedrito} alt="Pedrito" />
                </div>
            </div>
        </div>
    )
}

export default LoadingPedrito;