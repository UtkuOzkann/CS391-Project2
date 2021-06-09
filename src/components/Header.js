import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeadsetIcon from '@material-ui/icons/Headset';
import { NavLink } from 'react-router-dom'
import '../App.css';

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Navbar bg="dark" variant="dark">
                <NavLink to="/home" className="brand" style={{color: 'white'}}><i>FUVU</i></NavLink>
                <Nav className="ms-auto">
                      {
                      this.props.loggedInStatus === "LOGGED_IN"
                      ?  <> <NavLink to="/tps" className="btn" style={{color: '#f0ece2'}}><i>TPS</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/rts" className="btn" style={{color: '#a7ff83'}}><i>RTS</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/openworld" className="btn" style={{color: '#ffe2e2'}}><i>Open World</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/battlearena" className="btn" style={{color: '#1fab89'}}><i>MOBA</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/battleroyale" className="btn" style={{color: '#ffd460'}}><i>Battle Royale</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/fps" className="btn" style={{color: '#7c7575'}}><i>FPS</i></NavLink>
                        <NavDropdown.Divider /></>
                        : null
                      }
                    {
                    this.props.loggedInStatus === "NOT_LOGGED_IN"
                    ? <><NavLink to="/sign-in" className="btn" style={{color: 'white'}}>Sign In</NavLink>
                    <NavLink to="/sign-up" className="btn" style={{color: 'white'}}>Sign Up</NavLink></>
                    : null
                    }
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
