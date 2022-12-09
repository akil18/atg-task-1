import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import eye from '../assets/icons/eye.svg';
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import formPic from '../assets/images/formPic.svg';

function MyVerticallyCenteredModal(props) {
    const [form, setForm] = useState(false);

    const handleForm = () => setForm(!form);

return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{fontFamily: 'IBM Plex Sans'}}
    >
      <Modal.Header className='position-relative' style={{backgroundColor: '#EFFFF4'}}>
        <span className='bg-light rounded-circle position-absolute' style={{transform: 'scale(0.8)', top: '-2.5em', right: '-1.2em'}}>
            <button onClick={props.onHide} type="button" className='btn-close m-0 p-2' aria-label="Close"></button>
        </span>
        <Modal.Title id="contained-modal-title-vcenter">
            <p className='fw-bold px-5 text-success my-0' style={{fontSize: '.6em'}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-between align-content-center px-5 mt-3'>
        <h4 className='fw-bold'>
            {
                form? 'Sign In' : 'Create Account'
            }
        </h4>
        {
            form ? 
                <p>Don't have an account? <span onClick={handleForm} className='btn btn-link p-0 text-decoration-none text-primary fw-bolder'>Sign Up</span> </p> 
            :
                <p>Already have an account? <span onClick={handleForm} className='btn btn-link p-0 text-decoration-none text-primary fw-bolder'>Sign In</span> </p>
        }
      </Modal.Body>
      <Modal.Body className='container px-5'>
        <div class="row">
            <div class="col">
                <div>
                    <Form>
                        {
                            !form &&
                            <div className="input-group border border-2">
                                <input type="text" className="form-control py-2 bg-light border-0 border-end" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon2" />
                                <input type="text" className="form-control py-2 bg-light border-0 border-start" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon2" />
                            </div>
                        }
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control className="w-100 py-2 bg-light rounded-0" type="email" placeholder="Email" />
                        </Form.Group>
                        <div className="w-100 input-group border border-2">
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
                    <button onClick={props.handleSignIn} className='btn btn-primary rounded-pill fw-bold my-4 w-100' type='submit'>
                        {
                            form ? 'Sign In' : 'Create Account'
                        }
                    </button>
                    <button className='btn my-1 w-100 py-2 border border-1'>
                        <img src={facebook} alt="" />
                        <span onClick={props.handleSignIn} className='ms-2'>Sign {form? 'in' : 'up'} with Facebook</span>
                    </button>
                    <button className='btn my-2 w-100 py-2 border border-1'>
                        <img src={google} alt="" />
                        <span onClick={props.handleSignIn} className='ms-2'>Sign {form? 'in' : 'up'} with Google</span>
                    </button>
                    {
                        form && 
                        <p className='text-center my-3 fw-bolder'>Forgot Password?</p>
                    }
                </div>
            </div>
            <div class="col container justify-content-center">
                <img src={formPic} alt="" />
                {
                    !form &&
                    <p className='text-center mt-4' style={{fontSize: '.7em'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                }
            </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;