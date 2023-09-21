import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import ChartBoard from './Components/ChartBoard';
// import Login from './Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <AllRoutes />
    </BrowserRouter>
    </div>
  );
}

export default App;
