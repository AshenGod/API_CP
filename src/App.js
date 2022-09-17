import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Description from './Components/Description';
import Home from './Components/Home';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser'
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
        <Route path='/Users/:id' element={<PrivateRoute auth={auth}><Description/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
