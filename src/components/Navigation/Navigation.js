import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Node+React BP</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">Home</NavItem>
              <NavItem eventKey={2} href="/detail">Detail</NavItem>
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
