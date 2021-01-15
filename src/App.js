import logo from './logo.svg';
import {Header} from './components/Header'
import './App.css';
import { Balance } from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";


function App() {
  return (
    <div className="App">
     <Header/>
     <div  className='container'>

       <Balance/>

     </div>
     <div>
       <IncomeExpenses/>
     </div>
    </div>
  );
}

export default App;
