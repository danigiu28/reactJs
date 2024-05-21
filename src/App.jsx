import './App.css'
import Memo from './Clase12/Memo';
//import Productos from './Clase12/Productos';
//import Rendering2 from './Clase12/Rendering2';
//import EjemploRendering from './Clase12/EjemploRendering';
//import Rendering from './Clase12/Rendering';



function App() {

  const producto = {id:1, nombre:"Vaso Quencher Stanley 1.18 litros", marca:"Stanley", precio:54000, imagen:"https://stanley1913store.com/cdn/shop/files/Quencher_3_1400x.jpg", fecha:"09-05-2024"};

  return (
    <>
      <Memo item={producto} />
    </>
  )
}

export default App