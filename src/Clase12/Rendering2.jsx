const TextComponent1 = ({condicion, condicion2}) => {
    // Técnica Condicional #1 - Styling
    /* return (
        <h1 style={{color: condicion ? "green" : "red"}}>Styling!</h1>
    ) */

    // Técnica Condicional #2 - Classes
    /* return (
        <h1 className={condicion ? "text-warning bg-dark" : "text-white bg-danger"}>Classes!</h1>
    ) */

    // Técnica Condicional #3 (Multi Classes)
    /* return (
        <h1 className={`${colorFuente ? "text-success" : ""} ${colorFondo ? "bg-dark" : ""}`}>Classes!</h1>
    ) */

    // Técnica Condicional #3 (Multi Classes)
    /* return (
        <h1 className={`${colorFuente === 1 ? "text-success" : colorFuente === 2 ? "text-danger" : ""}`}>Classes!</h1>
    ) */

    // Técnica Condicional - Props dinámicas (usamos operador spread)
    const valor = condicion ? {
        className:condicion2 ? "text-success" : "text-danger",
        title:condicion2 ? "Este es el título" : "Acá no hay título"
    } : {};

    return (
        <h1 {...valor}>Mi Contenido HTML</h1>
    )
}

const Rendering2 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <TextComponent1 condicion={true} condicion2={true} />
                </div>
            </div>
        </div>
    )
}

export default Rendering2;