
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
 
} from 'mdb-react-ui-kit';
import Banner from '../Components/Banner';
import Testimonial from '../Components/Testimonial';
import Nominate from '../Components/Nominate';
import Footer from '../Components/Footer'


export default function Beneficiary() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
    
   <MDBNavbar expand='lg' light bgColor='default'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img
        style={{width:"80px"}}
        src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/308014047_400252318978681_1367743481210029940_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_ohc=3gOEtHW9cn4AX-Axjnl&_nc_ht=scontent-cpt1-1.xx&oh=00_AfDvPFCm2YR5EkgF13eqoYdBpXOEYwWMPrJXh4PlgMACog&oe=64E0CE15"
        alt="car"
      /></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem id='item'>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>Beneficiary</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/' >
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  <Banner />
    <Testimonial />
    <Nominate />
    <br></br>
    <Footer />

    </>
  );
}