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
        <MDBCardTitle>What we do</MDBCardTitle>
        <MDBCardText>
        We provide access to learner's and driver's license training for youths from disadvantaged communities in order to enhance their chances of employment.
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>
  );
}