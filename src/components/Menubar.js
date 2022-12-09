import React from 'react';
import './Menubar.css';
import { NavLink } from 'react-router-dom';
import group from '../assets/icons/group.svg';
import leave from '../assets/icons/leave.svg';


const Menubar = ({signedIn, handleSignIn, handleModal}) => {
    
    return (
        <>
            <div className='px-5'>
                <nav className="mx-5 border-bottom pb-2 desktopMenu">
                    <ul className='px-0 mx-0 mb-0'>
                        <li>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => isActive ? 'active' : undefined}
                                >
                                All Posts(32)
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="article"
                                className={({ isActive }) => isActive ? 'active' : undefined}
                                >
                                Article
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/event"
                                className={({ isActive }) => isActive ? 'active' : undefined}
                                >
                                Event
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/education"
                                className={({ isActive }) => isActive ? 'active' : undefined}
                                >
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/job"
                                className={({ isActive }) => isActive ? 'active' : undefined}
                            >
                                Job
                            </NavLink>
                        </li>
                    </ul>
                    <div className='d-flex gap-3'>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{backgroundColor: '#EDEEF0'}}
                            >
                                <span className='me-2'>Write A Post</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button class="dropdown-item" type="button">Action</button></li>
                                <li><button class="dropdown-item" type="button">Another action</button></li>
                                <li><button class="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                        {
                            signedIn ?
                                <button onClick={handleSignIn} className='btn border border-2 d-flex gap-2 align-items-center'>
                                    <img src={leave} alt="" />
                                    <p className='m-0'>Leave Group</p>
                                </button>
                            :
                                <button onClick={handleModal} className='btn btn-primary d-flex gap-2 align-items-center'>
                                    <img src={group} alt="" />
                                    <p className='m-0'>Join Group</p>
                                </button>
                        }
                    </div>
                </nav>
            </div>
            <nav className='mobileMenu'>
                <p className='fw-bold m-0'>Posts(368)</p>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className='me-2'>Filter: All</span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Action</button></li>
                            <li><button class="dropdown-item" type="button">Another action</button></li>
                            <li><button class="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
            </nav>
        </>
    );
};

export default Menubar;