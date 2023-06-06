import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Formulario from './components/Formulario'


function App() {
  
  return (
    <>
    <h1 className='text-center my-4'>Noticias</h1>
    <hr />
    <Formulario></Formulario>
    <Footer></Footer>
    </>
  )
}

export default App
