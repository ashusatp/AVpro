import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' exact  element={<Home/>} />
          <Route path='/register' exact  element={<Register/>} />
          <Route path='/login' exact  element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
