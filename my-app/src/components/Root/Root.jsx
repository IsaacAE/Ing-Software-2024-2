import React from 'react';
import Navigation from './Navigation/Navigation.jsx'; // Importa Navigation.jsx
import UsersCRUD from '../Pages/Users/UsersCRUD.jsx'
import MoviesCRUD from '../Pages/Movies/MoviesCRUD.jsx'
import RentsCRUD from '../Pages/Rents/RentsCRUD.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="users/*" element={<UsersCRUD />} />
       
          {/* Otras rutas anidadas */}
          {/* <Route path="/update" element={<UpdateUsers />} /> */}
          {/* <Route path="/delete" element={<DeleteUsers />} /> */}
          {/* <Route path="/:userId" element={<UserDetail />} /> */}
        <Route path="movies/*" element={<MoviesCRUD />} />
        <Route path="rents/*" element={<RentsCRUD />} />
      </Routes>
    </Router>
  );
}

export default Root;

