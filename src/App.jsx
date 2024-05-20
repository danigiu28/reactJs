import './App.css'
import ItemListContainer from './Clase11/ItemListContainer';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <ItemListContainer />
      </CartContextProvider>
    </>
  )
}

export default App