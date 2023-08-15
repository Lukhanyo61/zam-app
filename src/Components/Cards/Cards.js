import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2'
import Card3 from '../Cards/Card3'
import Card4 from '../Cards/Card4'
import Card5 from '../Cards/Card5'


export default function App() {
  return (
    <>
    <MDBContainer id='card'>
      <MDBRow>
        <MDBCol size='md'>
         <Card1 />
        </MDBCol>
        <MDBCol size='md'>
         <Card2 />
        </MDBCol>
        <MDBCol size='md'>
          <Card3 />
        </MDBCol>
      </MDBRow>
      <br></br>
    </MDBContainer>
    <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
         <Card4 />
        </MDBCol>
        <MDBCol size='md'>
         <Card5 />
        </MDBCol>
        <MDBCol size='md'>
   
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    </>
  );
}