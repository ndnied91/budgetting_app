

import './App.css';
import Header from '../Header'
import InputForm from '../InputForm'

import MainView from '../MainView'

import Calculator from '../Calculator'


function App() {
  return (
    <div className="container">
      <Header/>
      <InputForm/>
      <Calculator/>
    </div>
  );
}

export default App;
