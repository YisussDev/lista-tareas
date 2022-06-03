import './App.css';
import ListaTareas from './componentes/ListaCompleta';
import logo from './estilos/logo.png';

function App() {
  
  return (
    <div className="App">
      <div className='imgjp'>
        <img src={logo} alt='logo' title='logo'/>
      </div>
      <ListaTareas />
         
    </div>
  );
}

export default App;
