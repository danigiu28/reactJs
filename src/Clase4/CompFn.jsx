import DetalleProducto from "./DetalleProducto";
//import Estados from "./Estados";
//import Parrafo from "./Parrafo";
//import Titulo from "./Titulo";

const CompFn = () => {
    //let bebida = {id:1, nombre:"Coca Cola", precio:1800};
    let detalle = {id:1, nombre:"Big Mac", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", calorias:505, descripcion:"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único."};
    let detalle2 = {id:2, nombre:"Hamburguesa con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", calorias:289, descripcion:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda."};
    let detalle3 = {id:2, nombre:"Air Jordan 1 Mid", imagen:"https://nikearprod.vtexassets.com/arquivos/ids/659349-1200-1200?width=1200&height=1200&aspect=true", calorias:0, descripcion:"Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva."};

    return (
        <>
            {/* <Titulo texto={"Curso de JavaScript"} />
            <Parrafo contenido1={"Estamos aprendiendo el uso de las Props en React!"} contenido2={"Este es un segundo párrafo!"} producto={bebida} />
            <Estados /> */}
            <DetalleProducto producto={detalle} />
            <DetalleProducto producto={detalle2} />
            <DetalleProducto producto={detalle3} />
        </>
    )
}

export default CompFn;