import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Our Mission</MDBCardTitle>
        <MDBCardText>
        To provide a vehicle through which young people from disadvantaged backgrounds can be assisted to acquire skills that are necessary for employment seeking.
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
  );
}