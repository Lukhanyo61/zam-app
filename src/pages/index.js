
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
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Cards from '../Components/Cards/Cards';
import Counter from '../Components/counter/Counter';
import CardV from '../Components/CardV'
import Footer from '../Components/Footer';


export default function Navbar() {
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

     <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
<h1 id='Pay' className='text-center'>Paying it For</h1>
    <Cards />
    <Counter />
    <CardV />
    <Footer />
    {/* <Navbar /> */}
    </>
  );
}