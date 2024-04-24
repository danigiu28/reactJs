const TextoTitulo = ({children}) => { //Opción #1 - Desestructurando la prop desde los parámetros
    return (
        <div className="bg-dark p-5">
            {children}
        </div>
    )
}

const TextoContenido = (props) => { //Opción #2 - Recibimos un objeto como parámetros, y accedemos luego a las propiedades
    return (
        <>
            <p className="text-dark p-3 display-6">{props.texto}</p>
            <div className="border border-black p-5">
                {props.children}
            </div>
        </>
    )
}

const LogoCoder = () => {
    return (
        <h1 className="bg-dark text-warning">CODERHOUSE</h1>
    )
}

const CompChildren = () => {
    return (
        <>
            <TextoTitulo>
                <LogoCoder />
            </TextoTitulo>
            <TextoContenido texto="Estamos viendo como usar el Objeto Children...">
                <p>Curso de Desarrollo Web</p>
                <p>Curso de JavaScript</p>
            </TextoContenido>
        </>
    )
}

export default CompChildren;