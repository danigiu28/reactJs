import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './Clase9/Logo';
import Productos from './Clase9/Productos';
import Arrepentimiento from './Clase9/Arrepentimiento';
import Footer from './Clase9/Footer';
import Error404 from './Clase9/Error404';
import NavBar from './Clase9/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <NavBar />
        <Routes>
          <Route exact path={`/`} element={<Productos/>} />
          <Route exact path={'/categoria/:idCategoria'} element={<Productos />} />
          <Route exact path={`/arrepentimiento`} element={<Arrepentimiento/>} />
          <Route path={`/*`} element={<Error404/>} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
