import React, {useContext} from 'react';
import {Navbar, NavLink, NavItem, Nav} from 'reactstrap';
import './css/Nav.css';
import UserContext from './context/UserContext';
import {Link} from 'react-router-dom';

function NavBar({logout}){
    const {user} = useContext(UserContext);
    console.log(user)
    return(
        <Navbar>{
            user ?
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
                    <Link to='/' onClick={logout}>Sign Out {user.first_name}</Link>
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