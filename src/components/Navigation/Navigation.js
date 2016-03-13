import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Node+React BP</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/' }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/detail' }}>
                <NavItem eventKey={2}>Detail</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="DropDown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
