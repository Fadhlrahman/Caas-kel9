// import React from 'react';

// import { Navbar, Container, Nav } from "react-bootstrap"
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom untuk navigasi di dalam aplikasi
// import './CMcss.css';

// const NavigationBar = () => {
//   return (
//     <div>
//       <Navbar expand="lg" className="my-navbar">
//         <Container>
//           <Navbar.Brand as={Link} style={{ fontSize: '2em' }} to="/">S D A L</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className='ms-auto'>
//               <Nav.Link style={{ fontSize: '1.4em' }} as={Link} to="/team-profile">Team Profile</Nav.Link>
//               <Nav.Link style={{ fontSize: '1.4em' }} as={Link} to="/deskripsi-alat">Deskripsi Alat</Nav.Link>
//               <Nav.Link style={{ fontSize: '1.4em' }} as={Link} to="/monitoring-alat">Data Monitoring</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default NavigationBar;

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes untuk validasi props

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './CMcss.css';

const NavigationBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    // Lakukan proses logout di sini, misalnya mengubah state isLoggedIn menjadi false
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="my-navbar">
        <Container>
          <Navbar.Brand as={Link} style={{ fontSize: '2em' }} to="/">S D A L</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedIn && (
              <Nav className='ms-auto'>
                <Nav.Link style={{ fontSize: '1.4em' }} as={Link} to="/team-profile">Team Profile</Nav.Link>
                <Nav.Link style={{ fontSize: '1.4em' }} as={Link} to="/deskripsi-alat">Deskripsi Alat</Nav.Link>
                <Nav.Link style={{ fontSize: '1.4em' }} as={Link} to="/monitoring-alat">Data Monitoring</Nav.Link>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

// Definisikan prop-types untuk validasi props
NavigationBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // isLoggedIn harus bertipe boolean dan wajib ada
  setIsLoggedIn: PropTypes.func.isRequired, // setIsLoggedIn harus bertipe fungsi dan wajib ada
};

export default NavigationBar;
