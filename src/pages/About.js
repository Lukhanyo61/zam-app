import React, { useState } from 'react';
import Abanner from "../Components/Abanner";
import {
  MDBCol,
  MDBRow,
  MDBCardImage, 
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBContainer
} from 'mdb-react-ui-kit';

import {
  
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse

} from 'mdb-react-ui-kit';
import Footer from '../Components/Footer';








function About() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
   

   
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
  
 
  <Abanner/>


<div>
<div class="container">
      <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
        
          <MDBCardImage src="https://zamfoundation.co.za/wp-content/uploads/2021/08/zam-mem.jpg"  
                        alt="Trendy Pants and Shoes"
                        class="img-fluid rounded-start"/>
        
        <br/>
        </MDBCol>  
          <MDBCol md='8'>
          <MDBCardBody>
            <div>
            <MDBCardTitle>
              <h5 class="card-title" >About Zimkhitha Amanada Mashalaba</h5>
            </MDBCardTitle>
            <MDBCardText>
            The Zimkhitha Amanda Mashalaba Foundation herein referred to as ZAM Foundation, is a registered NPO (153-560 NPO) that aims to provide access to learners and driver training courses to young people from previously disadvantaged communities in order to improve their employability profile. The foundation focuses on young people who are 25 years and younger, who either have matric or are in the process of obtaining one. We have identified that a large number of these young people once they finish their matric, usually opt for job seeking as opposed to tertiary education due to lack of funds from their families. Our aim is to intervene during this period by providing them with the opportunity to acquire a skill that improves their chances of employment and can also be of great use to them in the future i.e. the ability and certification to drive a motor vehicle.
            </MDBCardText>
              <br/>
           
            </div>
            <div>
            <MDBCardTitle>
              <h5 class="card-title" >Goverance</h5>
            </MDBCardTitle>
            <MDBCardText>
            The foundation is governed by an advisory board that is made up of members who serve on a voluntary basis. None of the members draw a salary or remuneration from the organisation.

            </MDBCardText>
            </div>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>  
      </MDBCard> 
      </div>
      <br/>
      
      <div class="text-center"><h1>Meet Team</h1></div>
      <br/>
      <div>
        <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
                  src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-2.jpg"
                  class="img-fluid" />
          
          <MDBCardHeader>Featured</MDBCardHeader>
                  
          <MDBCardBody>
            <MDBCardTitle><h5 class="card-title">Gringoe Thandile Mashalaba</h5></MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                    Gringoe works in the design engineering space and is very passionate about mechanical design and engineering in general. He is an ordained pastor who currently serves in the national structures at his church. 
                    Driven by his passion for helping others Gringoe founded the ZAM Foundation in 2015 as a vehicle to assist young people from around his own childhood neighbourhood and surrounding areas. He currently serves as Chairman of the board of ZAM.
                  </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-1-1.jpg"
            class="img-fluid"
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle><h5 class="card-title">Mawonga Phaphile Celesi</h5></MDBCardTitle>
            <MDBCardText>          <p class="card-text">
                    Phaphile trained as an educator and later worked on radio both as presenter and HOD. He currently works as Head of Missions and Theological Training. Phaphile also authored a children’s book, called ‘With the eyes of a child-sharing God’s love with the young’.

                    It was his passionate for mentorship that saw him join ZAM Foundation as a board member in 2015.
                  </p></MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-2-1.jpg" 
            class="img-fluid" 
            alt='...'
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle><h5 class="card-title">Mcedidi Mkubukeli</h5></MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                    Mncedisi is a former manager within the  Department of Health and is now retired. 
                    He is also a founder of Family Enrichment Ministry (FEM) that focuses on helping families and married couples ovwrcome life’s challenges. He currently also serves as a marriage counselor.
                    
                    As a family oriented individual it was a no brainer when Mncedisi was invited to be part of the ZAM Foindation board and accepted the challenge enthusiastically.
                  </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-3.jpg" class="img-fluid"
            alt='...'
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Ca</MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                  

                  Siegfried serves as ‘Regional Director’ of a mission organisation in Southern Africa and Indian Oceans Islands. His focus is on the entity directors in the respective countries. He is an ordained minister and passionate about theological education and leadership development. Siegfried serves in various boards and councils in and beyond South Africa.
                  Recently he has also been appointed as a ‘Research Fellow’ in Missiology with the University of Stellenbosch.
                  
                  Siegfried has served on the board of ZAM from the beginning. As a trained, life and leadership coach, he finds serving in the board a unique and joyful experience.
                                    </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/>
    <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-4-1.jpg"
            class="img-fluid"
            alt='...'
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Ca</MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                        Nomfundo is an IT Professional working in the Financial Services sector. She has a passion for people and technology and believes that through building solid relationships and nurturing partnerships we can achieve many great things in business and life.

                        It has always been her nature to help find solutions to problems, that’s what led her to ZAM Foundation. She currently serves as secretary of the board.
                      </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/WhatsApp_Image_2021-04-05_at_23.49.49-removebg-preview.jpg"
            class="img-fluid"

            alt='...'
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Ca</MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                        Jarome is a qualified attorney with years of experience in the legal field couples with hands on experience in management of business entities. As a football enthusiast, Jarome now works as a full-time football coach at one of the leading institutions in Germany.

    His experience serving as chairman for various Non-Governmental Organisation made him the perfect choice to serve on the board of ZAM Foundation. Jarome believe in empowerment, development and mentorship especially those who were previously disadvantaged.
                      </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/zDDdoYqQ64U.jpg" class="img-fluid"
            alt='...'
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Ca</MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                        Phumezo is a Church Minister serving in the township of Khayelitsha. He is passionate about the leadership developmentand training for young people. Phumezo also works as a lecturer at George Whitefiled College in Cape Town.
                        Phumezo has served in the advisory board of ZAM Foundation from its inception.
                      </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
          
        <MDBCard className='h-100'>
          <MDBCardImage
            src="https://zamfoundation.co.za/wp-content/uploads/2021/04/ABUWC-0a7_A.jpg" class="img-fluid"
            alt='...'
            position='top'
          />
          <MDBCardHeader>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Ca</MDBCardTitle>
            <MDBCardText>
            <p class="card-text">
                        Xolani is a qualified educator and now serves within the Higher Education with specific focus in the students financial aid sector.
His passion for education, training and development for the previously disadvantaged was one of the reasons that led him to join ZAM Foundation as a board member in 2015.
                      </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </div>
        <br/>     
</div>







<Footer />
    </div>

    
  );
}

export default About;
