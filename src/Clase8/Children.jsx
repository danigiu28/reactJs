import Map from "../Clase6/Map"

const Caja = ({ titulo, descripcion, children }) => {
    return (
        <div className="p-5 bg-dark-subtle text-white">
            <Titulo texto={titulo} />
            <p>{descripcion}</p>
            <div className="text-secondary">
                {children}
            </div>
        </div>
    )
}

const Titulo = ({texto}) => {
    return (
        <h1 className="display-3">{texto}</h1>
    )
}

const Children = () => {
    return (
        <Caja titulo={"Coderhouse"} descripcion={"Curso de React JS"}>
            <p>Estamos viendo todo acerca de <b>Componentes Children</b>.</p>
            <p>Otro párrafo</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laboriosam unde exercitationem velit reiciendis quos mollitia cumque sed iure, sint libero sunt pariatur. Asperiores consequuntur dignissimos, illum ducimus fugiat id!</p>
            <Map />
        </Caja>
    )
}

export default Children;