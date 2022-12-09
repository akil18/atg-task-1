import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../components/Menubar';
import Sidebar from '../components/Sidebar';
import './Menu.css';


const Menu = ({signedIn, handleSignIn, handleModal}) => {

    return (
        <div className='mt-4'>
            <div className='px-3'>
                <Menubar
                    signedIn={signedIn}
                    handleSignIn={handleSignIn}
                    handleModal={handleModal}
                ></Menubar>
            </div>
            <div className='mt-4 container'>
                <div className="row">
                    <div className='col-9 mainSection'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-3 sideSection'>
                        <Sidebar
                            signedIn={signedIn}
                        ></Sidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;