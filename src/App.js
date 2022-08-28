import './App.css'
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register';
import Home from './components/Home';
import {Link} from 'react-router-dom'
function App() {
  return (
    <>
    hello
    <BrowserRouter>
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <Link to = "/" className="nav-link px-2 text-white">Home</Link>
         
          
        </ul>
       
        <div className="text-end">
          <Link to ="/login" className="btn btn-outline-light me-2">Login</Link>
          <Link to = "/register" className="btn btn-outline-light me-2">Register</Link>
        </div>
      </div>
    </div>
  </header>
    <Routes>
    <Route path="/" exact element={<Home/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/register" exact element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
