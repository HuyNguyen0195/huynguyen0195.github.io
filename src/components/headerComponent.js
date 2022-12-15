import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
  };

  this.toggleNav = this.toggleNav.bind(this);
  this.toggleModal = this.toggleModal.bind(this);
  this.handleLogin = this.handleLogin.bind(this);

  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }
  handleLogin(event) {
    alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
    this.toggleModal();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        

        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/" onClick={this.toggleNav}>
                    <i className="fa fa-home fa-sm " /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/mongo" onClick={this.toggleNav}>
                    <i className="fa fa-list fa-sm" /> Mongo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/gomoku" onClick={this.toggleNav}>
                    <i className="fa fa-info fa-sm" /> Gomoku
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/redux" onClick={this.toggleNav}>
                    <i className="fa fa-address-card fa-sm" /> redux
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about" onClick={this.toggleNav}>
                    <i className="fa fa-address-card fa-sm" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/nopage" onClick={this.toggleNav}>
                    <i className="fa fa-address-card fa-sm" /> No page
                  </NavLink>
                </NavItem>
                </Nav>
                  <span className="navbar-text ml-auto" onClick={this.toggleNav}>
                      <Button outline onClick={this.toggleModal}>
                          <i className="fa fa-sign-in " /> Login
                      </Button>
                  </span>
            </Collapse>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
            </Modal>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;