import React from 'react';
import Navigation from './Navigation/Navigation.jsx'; // Importa Navigation.jsx
import UsersCRUD from '../Pages/Users/UsersCRUD.jsx'
import CreateUser from '../Pages/Users/CRUD/C/UserCreate.jsx'
import ReadUsers from '../Pages/Users/CRUD/R/UserRead.jsx'
import UserDetails from '../Pages/Users/CRUD/R/UserShow.jsx'
import MoviesCRUD from '../Pages/Movies/MoviesCRUD.jsx'
import RentsCRUD from '../Pages/Rents/RentsCRUD.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="users/*" element={<UsersCRUD />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="readUsers/" element={< ReadUsers/>} />
        <Route path="showUser/:id" element={< UserDetails/>} />
        <Route path="movies/*" element={<MoviesCRUD />} />
        <Route path="rents/*" element={<RentsCRUD />} />
      </Routes>
    </Router>
  );
}

export default Root;

