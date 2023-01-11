import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const pages = [
  {href:"/", text:"Home",className:"fa fa-sm fa-home"},
  {href:"/mongo", text:"Mongo", className:"fa fa-sm fa-list"},
  {href:"/gomoku", text:"Gomoku", className:"fa fa-sm fa-info"},
  {href:"/redux", text:"Redux", className:"fa fa-sm fa-list"},
  {href:"/movie", text:"Movie", className:"fa fa-sm fa-home"},
];
const createNavItem = ({href,text,className},toggle) => (
  <NavItem>
    <NavLink className="nav-link" to={href} onClick={toggle} >
      <i className={className} /> {text}
    </NavLink>
  </NavItem>
);

export default class NavMenu extends Component {

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
        <Navbar dark sticky="top" color='dark' expand="md">
          <NavbarBrand>HuyNguyen</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className='ml-auto' navbar>
                
                {pages.map(item=>createNavItem(item,this.toggleNav))} 

              </Nav>
                <span className="navbar-text " onClick={this.toggleNav}>
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
        </Navbar>
      </React.Fragment>
    );
  }
}

