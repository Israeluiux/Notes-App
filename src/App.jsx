import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SingleNote from './Pages/SingleNote';
import Task from './Pages/Task';
import NewNote from './Pages/NewNote';
import Favorite from './Pages/Favorite';
import Login from './Auth/Login';
import Register from './Auth/Register';
import PrivateRoute from './Auth/PrivateRoute';
import Trash from './Pages/Trash';
import Setting from './Pages/Setting';
import Profile from './Pages/Profile';


function App() {
  return (
    <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
            <Route path='/' element={<PrivateRoute />}>
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='note/:id' element={<SingleNote />} />
                <Route path='/task' element={<Task />} />
                <Route path='/new-note' element={<NewNote />} />
                <Route path='/favorite' element={<Favorite />} />
                <Route path='/trash' element={<Trash />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Setting />} />
            </Route>
        </Routes>
  );
}


export default App;