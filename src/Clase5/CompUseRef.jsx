import { useRef, useState } from "react"

const CompUseRef = () => {
    const [estado1, setEstado1] = useState("Curso de JS (por estado)");
    const Div1 = useRef("Curso de JavaScript");

    function modificarDiv() {
        Div1.current.innerHTML = "Curso de React JS";
        Div1.current.className = "bg-dark text-success display-6";
        setEstado1("Curso de React JS");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>UseRef</h1>
                    <div ref={Div1}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores qui velit, et nihil iste doloribus reiciendis temporibus nisi suscipit voluptatum ipsam voluptate atque incidunt quisquam ipsa minima, saepe non expedita.</p>
                        <p>{estado1}</p>
                    </div>
                    <p><button className="btn btn-primary" onClick={modificarDiv}>Modificar DIV #1</button></p>
                </div>
            </div>
        </div>
    )
}

export default CompUseRef;