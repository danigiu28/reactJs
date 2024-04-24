import { useCount } from "./UseCount";

const CompContador = () => {
    const { contador, incrementar, decrementar, reiniciar } = useCount(1, 1, 5);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Contador</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}> - </button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}> + </button>
                        <button type="button" className="btn btn-danger" onClick={reiniciar}>Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompContador;