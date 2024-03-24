import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Login from './Server/Login'; // Pastikan path ini sesuai dengan struktur direktori Anda
import Pendaftaran from './Server/Pendaftaran';
import HomePg from './Pages/HomePg';
import DesAlatPg from './Pages/DesAlatPg';
import MonAlatPg from './Pages/MonAlatPg';
import TeamPg from './Pages/TeamPg';
// import ForgotPassword from './Server/ForgotPassword';

import "./Style/LandingPage.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <div className='myBG'>
          <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            {/* Rute untuk halaman login */}
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            {/* Rute untuk halaman registrasi */}
            <Route path='/register' element={<Pendaftaran />} />
            {/* Rute untuk halaman yang hanya dapat diakses setelah login */}
            {isLoggedIn ? (
              <> 
                <Route path='/' element={<HomePg />} />
                <Route path='/deskripsi-alat' element={<DesAlatPg />} />
                <Route path='/monitoring-alat' element={<MonAlatPg />} />
                <Route path='/team-profile' element={<TeamPg />} />
              </>
            ) : (
              // Tampilkan halaman login jika pengguna belum login
              <Route path='*' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            )}
            {/* Rute untuk halaman lupa password */}
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
