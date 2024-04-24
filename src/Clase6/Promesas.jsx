const Promesas = () => {
    // Promesas con 2 parámetros (resolve y reject)
    /* const tarea = new Promise((resolve, reject) => {
        const random = Math.round(Math.random() * 1); // genero un número aleatorio entre 0 y 1

        if (random == 1) {
            resolve("Vamos al Cine!");
        } else {
            reject({respuesta:"Negativo", motivo:"NO HAY PLATA!"});
        }
    });

    tarea.then(pepe => {
        console.log("Resultado: " + pepe);
    })
    .catch(data => {
        console.log("Motivo del rechazo: (" + data.respuesta + ") " + data.motivo);
    }) */


    // Promesa con 1 parámetro (resolve)
    /* const tarea = new Promise((res) => {
        res({id:1, nombre:"Coca Cola", precio:1800});
    });

    tarea.then(respuesta => {
        console.log(respuesta.nombre + " $" + respuesta.precio);
    }) */


    // Promesa con operadores encadenables y finally
    const tarea = new Promise((resolve, reject) => {
        const random = Math.round(Math.random() * 1); // genero un número aleatorio entre 0 y 1

        if (random == 1) {
            resolve("Vamos al Cine!");
        } else {
            reject({respuesta:"Negativo", motivo:"NO HAY PLATA!"});
        }
    });

    tarea.then(pepe => {
        console.log("Resultado: " + pepe);
    })
    .catch(data => {
        console.log("Motivo del rechazo: (" + data.respuesta + ") " + data.motivo);
    })
    .then(() => {
        console.log("Ejecución de un Proceso #2");
    })
    .then(() => {
        console.log("Ejecución de un Proceso #3");
    })
    .finally(() => {
        console.log("Fin de la ejecución del programa!");
    })




    return (
        <>
            <h1>Promesas</h1>
        </>
    )
}

export default Promesas;