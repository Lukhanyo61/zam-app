import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard id='objective'>
      <MDBCardBody id='obj'>
        <MDBCardTitle>Our Objective</MDBCardTitle>
        <MDBCardText>
        To provide disadvantaged youths access towards obtaining their learners and drivers
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
  );
}