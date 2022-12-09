import React from 'react';
import pin from '../assets/icons/pin.svg';
import darkPen from '../assets/icons/darkPen.svg';
import warn from '../assets/icons/warn.svg';
import cross from '../assets/icons/cross.svg';
import like from '../assets/icons/like.svg';
import leisure from '../assets/images/leisure.png';
import activism from '../assets/images/activism.png';
import mba from '../assets/images/mba.png';
import philosophy from '../assets/images/philosophy.png';

const barData = [
    {
        id: 1,
        pic: leisure,
        name: 'Leisure'
    },
    {
        id: 1,
        pic: activism,
        name: 'Activism'
    },
    {
        id: 1,
        pic: mba,
        name: 'MBA'
    },
    {
        id: 1,
        pic: philosophy,
        name: 'Philosophy'
    },
];

const Sidebar = ({signedIn}) => {
    return (
        <>
            {
                signedIn ? 
                    <div className='ps-5'>
                        <div className='d-flex justify-content-between align-items-center border-bottom pb-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <img src={pin} alt="" />
                                <p className='m-0 ps-1'>|Enter your location</p>
                            </div>
                            <img src={cross} alt="" />
                        </div>
                        <div className='mt-5 d-flex'>
                            <img className='pb-4 me-1' src={warn} alt="" />
                            <small><p className='text-secondary m-0' style={{fontSize: '90%'}}>Your location will help us serve better and extend a personalised experience.</p></small>
                        </div>
                        <div className='mt-5 d-flex jsutify-content-between align-items-center'>
                            <img src={like} alt="" />
                            <p className='m-0 ps-2'>RECOMMENDED GROUPS</p>                            
                        </div>
                        <div className='mt-3'>
                            {
                                barData.map(item => <div className='d-flex my-3 justify-content-between align-items-center'>
                                    <img src={item.pic} alt="" />
                                    <p className='m-0'>{item.name}</p>
                                    <button className='btn btn-sm btn-light rounded-pill'>Follow</button>
                                </div>)
                            }
                        </div>
                        <small><p className='mt-5 text-end text-primary'>See More...</p></small>
                    </div>
                :
                    <div className='ps-5'>
                        <div className='d-flex justify-content-between align-items-center border-bottom pb-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <img src={pin} alt="" />
                                <p className='m-0 ps-1'>Noida, India</p>
                            </div>
                            <img src={darkPen} alt="" />
                        </div>
                        <div className='mt-5 d-flex'>
                            <img className='pb-4 me-1' src={warn} alt="" />
                            <small><p className='text-secondary m-0' style={{fontSize: '90%'}}>Your location will help us serve better and extend a personalised experience.</p></small>
                        </div>
                    </div>
            }
        </>
    );
};

export default Sidebar;