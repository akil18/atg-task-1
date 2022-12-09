import React from 'react';
import './Banner.css'
import banner from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.png';
import arrowBack from '../assets/icons/arrowBack.svg';

const Banner = ({signedIn, handleShow, handleSignIn}) => {
    return (
        <div className='bg-dark position-relative'>
            <img className='banner' src={banner} alt="" />
            <div className='banner2'>
                <div className='postion-relative'>
                    <img className='banner-img' src={banner2} alt="" />
                    <div className='position-absolute top-0 left-0 join-group'>
                        <div className='d-flex p-3 justify-content-between'>
                            <img src={arrowBack} alt="" />
                                {
                                    signedIn ?  
                                        <button onClick={handleSignIn} className='btn btn-dark border border-light color-white'>Leave Group</button>
                                    :    
                                        <button onClick={handleShow} className='btn btn-dark border border-light color-white'>Join Group</button>
                                }
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-text'>
                <div className='text-light'>
                    <h1 className='fw-bold banner-heading'>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;