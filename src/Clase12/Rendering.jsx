const TextComponent1 = ({ condicion }) => {

    // Técnica Condicional #1

    /* if (condicion) {
        return (
            <h1 className="text-success">Condición Verdadera!!!</h1>
        )
    }
    return (
        <h1 className="text-danger">Condición Falsa!!!</h1>
    ) */

    // Técnica Condicional #2

    /* return (
        <>
        {condicion && <h2>Condición Verdadera</h2>}
        {!condicion && <h2>Condición Falsa</h2>} 
        </>
    ) */

    // Técnica Condicional #3 (Operador Ternario)

    return (
        <>
        <h1>{condicion ? "Condición Verdadera!!!" : "Condición Falsa!!!"} </h1>
        </>
    )



}

const Rendering = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <TextComponent1 condicion={true} />
                </div>
            </div>
        </div>
    )
}

export default Rendering;
