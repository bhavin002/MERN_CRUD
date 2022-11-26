import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Edituser from './component/pages/Edituser';
import Adduser from './component/pages/Adduser';
import Users from './component/pages/Users';
import Navbar from './component/Navbar';
import Details from './component/pages/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/adduser' element={<Adduser/>}/>
          <Route path='/edit/:id' element={<Edituser/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
