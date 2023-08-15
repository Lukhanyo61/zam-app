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
      <MDBCardBody id='who'>
        <MDBCardTitle>For Who</MDBCardTitle>
        <MDBCardText>
        The foundation focuses on young people who are 25 years and younger, who either have matric or are in the process of obtaining one.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
  );
}