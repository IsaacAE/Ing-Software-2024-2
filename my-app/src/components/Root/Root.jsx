import React from 'react';
import Navigation from './Navigation/Navigation.jsx'; // Importa Navigation.jsx
import UsersCRUD from '../Pages/Users/UsersCRUD.jsx'
import CreateUser from '../Pages/Users/CRUD/C/UserCreate.jsx'
import ReadUsers from '../Pages/Users/CRUD/R/UserRead.jsx'
import UpdateUser from '../Pages/Users/CRUD/U/UserUpdate.jsx'
import DeleteUser from '../Pages/Users/CRUD/D/UserDelete.jsx'
import CreateMovie from '../Pages/Movies/CRUD/C/MovieCreate.jsx'
import ReadMovies from '../Pages/Movies/CRUD/R/MovieRead.jsx'
import UpdateMovie from '../Pages/Movies/CRUD/U/MovieUpdate.jsx'
import DeleteMovie from '../Pages/Movies/CRUD/D/MovieDelete.jsx'
import UserDetails from '../Pages/Users/CRUD/R/UserShow.jsx'
import MoviesCRUD from '../Pages/Movies/MoviesCRUD.jsx'
import RentsCRUD from '../Pages/Rents/RentsCRUD.jsx'
import CreateRent from '../Pages/Rents/CRU/C/RentCreate.jsx'
import ReadRents from '../Pages/Rents/CRU/R/RentRead.jsx'
import UpdateRent from '../Pages/Rents/CRU/U/RentUpdate.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="users/*" element={<UsersCRUD />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="readUser" element={< ReadUsers/>} />
        <Route path="updateUser" element={< UpdateUser/>} />
        <Route path="deleteUser" element={< DeleteUser/>} />
        <Route path="showUser/:id" element={< UserDetails/>} />
        <Route path="movies/*" element={<MoviesCRUD />} />
        <Route path="createMovie" element={<CreateMovie/>} />
        <Route path="readMovie" element={<ReadMovies/>} />
        <Route path="updateMovie" element={<UpdateMovie/>} />
        <Route path="deleteMovie" element={<DeleteMovie/>} />
        <Route path="rents/*" element={<RentsCRUD />} />
        <Route path="createRent" element={<CreateRent />} />
        <Route path="readRent" element={<ReadRents />} />
        <Route path="updateRent" element={<UpdateRent />} />

      </Routes>
    </Router>
  );
}

export default Root;

