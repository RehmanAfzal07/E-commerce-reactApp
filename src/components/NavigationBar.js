import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import {  AddShoppingCartOutlined, FavoriteBorderOutlined, HomeOutlined } from '@material-ui/icons';
import { LoginRounded } from '@mui/icons-material';



const Styles = styled.div`
  
  .navbar
  a, .navbar-nav, .navbar-light .nav-link {
    color: #EB1527;
    font-wight: 20px;
    &:hover { color:#1ab372; }
    border: dash;
  }
  .navbar-brand {
    font-size: 1.5em;
    font-wight: 80px;
    margin: 5px;
    color: #EB1527;
    &:hover { color: #1ab372; }
  } 
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  // const  {
  //   isEmpty,
  //   totalUniqueItems,
  //   items,
  //   totalItems,
  //   updateItemQuantity,
  //   removeItem,
  //   cartTotal,
  //   emptyCart,
  // } = useCart();


  <Styles>
    <Navbar expand="lg" >
      <Navbar.Brand href="/"><img src='kfc.png' alt='monogram'/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>                    
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"  style={{color:"#EB1527"}}>
          <Nav.Item><Nav.Link href="/"><HomeOutlined /></Nav.Link></Nav.Item>  
          <Nav.Item><Nav.Link href="/cart"> <AddShoppingCartOutlined/></Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/favorite"> <FavoriteBorderOutlined/> </Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/login"> <LoginRounded/> </Nav.Link></Nav.Item> 
          </Nav>
      </Navbar.Collapse>
    </Navbar>                       
  </Styles>
)
                    