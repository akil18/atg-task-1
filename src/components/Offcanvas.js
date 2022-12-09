import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import eye from '../assets/icons/eye.svg';
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';

function Example({ handleSignIn, show, handleClose }) {
  const [form, setForm] = useState(false);

  const handleForm = () => setForm(!form);

  return (
    <>
      <Offcanvas className='rounded-top px-2' style={{height: '75%', fontFamily: 'IBM Plex Sans'}} show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header>
          <Offcanvas.Title className='mt-2 fw-bold'>
            {
                form ? 'Welcome back!' : 'Create Account' 
            }
          </Offcanvas.Title>
            <span className='bg-dark rounded-circle' style={{transform: 'scale(0.8)'}}>
                <button onClick={handleClose} type="button" className='btn-close btn-close-white m-0 p-2' aria-label="Close"></button>
            </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form className='mb-4'>
                {
                    !form &&
                    <div className="input-group border border-2">
                        <input type="text" className="form-control py-2 bg-light border-0 border-end" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon2" />
                        <input type="text" className="form-control py-2 bg-light border-0 border-start" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon2" />
                    </div>
                }
                <Form.Group controlId="formGroupEmail">
                    <Form.Control className="py-2 bg-light rounded-0" type="email" placeholder="Email" />
                </Form.Group>
                <div className="input-group border border-2">
                    <input type="password" className="form-control py-2 bg-light border-0" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                    <span class="input-group-text border-0 bg-light" id="basic-addon2"><img style={{transform: 'scale(1.2)'}} src={eye} alt="" /></span>
                </div>
                {
                    !form && 
                    <Form.Group controlId="formGroupConfirmPassword">
                        <Form.Control className="py-2 mt-0 bg-light rounded-0" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                }
            </Form>
            <div className='d-flex justify-content-between mb-3'>
                <button onClick={handleSignIn} className='btn btn-primary rounded-pill fw-bold' style={{width: '45%'}} type='submit'>
                    {
                        form ? 'Sign In' : 'Create Account'
                    }
                </button>
                <button className='btn btn-link p-0' style={{color: 'black'}} onClick={handleForm}>
                    <u>
                        {
                            form ? 'or, Create Account' : 'or, Sign In'
                        }
                    </u>
                </button>
            </div>
            <button className='btn my-1 w-100 py-2 border border-1'>
                <img src={facebook} alt="" />
                <span onClick={handleSignIn} className='ms-2'>Sign {form? 'in' : 'up'} with Facebook</span>
            </button>
            <button className='btn my-2 w-100 py-2 border border-1'>
                <img src={google} alt="" />
                <span onClick={handleSignIn} className='ms-2'>Sign {form? 'in' : 'up'} with Google</span>
            </button>
            {
                form ? 
                    <p className='text-center my-2'>Forgot Password?</p>
                :
                    <p className='text-center my-2'>By signing up, you agree to our Terms & <br/> conditions, Privacy policy</p>
            }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;