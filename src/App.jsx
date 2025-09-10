import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLayout from './Pages/UserLayout';
import Login from './Auth/Login';
import Task from './Pages/Task';


function App() {
  return (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<UserLayout />}>
           <Route index element={<Home />} />
           <Route path='/' element={<Home />} />
           <Route path='/task' element={<Task />} />
          </Route>
        </Routes>
  );
}


export default App;