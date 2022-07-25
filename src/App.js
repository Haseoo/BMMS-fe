import './App.css';
import Main from './main/Main';
import { BrowserRouter, Route, Routes, Link, withRouter, Router, useLocation } from 'react-router-dom';
import Materials from './materials/Materials';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';



const Header = props => {
  const location = useLocation();
  const [userName, setUserName] = useState('Not logged in');
  const login = () => {
    setUserName('DS')
  }
  console.log(location.pathname)
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">BBMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={location.pathname}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/materials">Materials</Nav.Link>
              <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
              <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title= {userName} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => login(this)}>Log in</NavDropdown.Item>
                {/* <NavDropdown.Item>
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="*" element= { <h1>NOT FOUND!</h1> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
