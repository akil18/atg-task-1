import React from 'react';
import './Topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logos/logo.svg';
import search from '../assets/icons/search.svg';
import rectangle from '../assets/icons/Rectangle.svg';
import oval from '../assets/icons/Oval.svg';
import path from '../assets/icons/Path.svg';
import joseph from '../assets/images/joseph.png';

const Topbar = ({signedIn, handleModal}) => {
    return (
        <div className='postion-relative'>
            <div className='mobileView'>
                <div className='d-flex gap-2 p-2 justify-content-end'>
                    <img src={rectangle} alt="" />
                    <img src={oval} alt="" />
                    <img src={path} alt="" />
                </div>
            </div>
            <div className='desktopView'>
                <Navbar fixed='top' className='border-bottom navElement'>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <div className='d-flex align-items-center'>
                            <div className="input-group rounded-pill" style={{backgroundColor: "#F2F2F2"}}>
                                <button class="btn" type="button" id="button-addon1">
                                    <img src={search} alt="" />
                                </button>
                                <input type="text" className="form-control border-0 rounded-pill" placeholder='Search for your favorite groups in ATG' style={{backgroundColor: "#F2F2F2", width: "360px"}} aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        {
                            signedIn ?
                                <Nav className="py-2 justify-content-between align-items-center">
                                    <Navbar.Text>
                                        <img src={joseph} alt="" />
                                        <span className='text-dark mx-2'>Siddarth Goyal</span>
                                    </Navbar.Text>
                                    <NavDropdown title="" id="nav-dropdown dropstart">
                                        <NavDropdown.Item>modal</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            :
                                <Nav className="py-2 justify-content-between">
                                    <Navbar.Text className='fw-bold' style={{color: "#2E2E2E"}}>
                                        Create Account.<span className='text-primary me-2'> It's free!</span>
                                    </Navbar.Text>
                                    <NavDropdown title="" id="nav-dropdown dropstart">
                                        <NavDropdown.Item>modal</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                        }
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Topbar;