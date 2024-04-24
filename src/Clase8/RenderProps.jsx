import { useState } from "react"

// Componente de Representación, recibe un array como prop y renderiza
const TasksList = ({ tasks }) => {
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} >{task.nombre}</li>
                ))}
            </ul>
        </>
    )
}

// Componente de Orden Superior, recibo como children todo contenido html y devuelvo ese children modificado
const Filter = ({ children }) => {
    const [filterState, setFilterState] = useState('all');

    const hanldeFilterState = (evento) => {
        setFilterState(evento.target.value);
    }

    return children(filterState, hanldeFilterState);
}


const RenderProps = () => {
    const tasks = [
        { id: 1, nombre: "Hacer la Cama", completed: true },
        { id: 2, nombre: "Hacer el Desayuno", completed: false },
        { id: 3, nombre: "Hacer el Almuerzo", completed: false },
        { id: 4, nombre: "Ir al Gimnasio", completed: true },
        { id: 5, nombre: "Hacer Alfajorcitos de Maicena", completed: true },
    ]

    return (
        <Filter>
            {(filterState, hanldeFilterState) => (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="filter">Tareas</label>
                            <select id="filter" select={filterState} onChange={hanldeFilterState}>
                                <option value="all">Todos</option>
                                <option value="completed">Completados</option>
                                <option value="nocompleted">No Completados</option>
                            </select>
                            <TasksList tasks={filterState == "all" ? tasks : tasks.filter(item => (filterState == "completed" ? item.completed : !item.completed))} />
                        </div>
                    </div>
                </div>
            )}
        </Filter>
    )
}

export default RenderProps;