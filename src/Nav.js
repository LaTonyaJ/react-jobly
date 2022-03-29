import React, {useContext} from 'react';
import {Navbar, NavLink, NavItem, Nav} from 'reactstrap';
import JoblyApi from './api';
import './Nav.css';
import UserContext from './context/UserContext';

function NavBar(){
    const user = useContext(UserContext);

    return(
        <Navbar>{
            localStorage.getItem('token') ?
            <Nav className='navbar'>
                <NavItem>
                    <NavLink href='/'>Jobly</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/companies'>Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/jobs'>Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/profile'>Profile</NavLink>
                </NavItem>
                <NavItem> 
                    <NavLink href='/signout'>Sign Out {user.username}</NavLink>
                </NavItem>
            </Nav>:
            <Nav className='navbar'>
                <NavItem>
                    <NavLink href='/register'>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/login'>Login</NavLink>
                </NavItem>
            </Nav>}
        </Navbar>
    );
}

export default NavBar;