import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../components/Banner';
import MyVerticallyCenteredModal from '../components/Modal';
import Example from '../components/Offcanvas';
import Topbar from '../components/Topbar';
import pen from '../assets/icons/pen.svg';
import Menu from './Menu';
import './Main.css';

const Main = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSignIn = () => {
    setSignedIn(!signedIn);
    setShow(false);
    setModalShow(false);
  }
  const handleModal = () => setModalShow(true);

  return (
    <div className="Main">
      <Topbar 
        signedIn={signedIn}
        handleModal={handleModal}
      ></Topbar>
      <section>
        <Banner
          signedIn={signedIn}
          handleSignIn={handleSignIn}
          handleShow={handleShow}
          ></Banner>
        <div>
            <Menu
                signedIn={signedIn}
                handleSignIn={handleSignIn}
                handleModal={handleModal}
            ></Menu>
        </div>
      </section>
      
      <span className='btn-pen'>
        <Button style={{display: 'flex', backgroundColor: '#FF5C5C'}} className='rounded-circle border-0 p-3'>
          <img src={pen} alt="" />
        </Button>
      </span>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSignIn={handleSignIn}
      />
        <Example
          show={show}
          handleClose={handleClose}
          handleSignIn={handleSignIn}
        ></Example>
    </div>
  );
};

export default Main;