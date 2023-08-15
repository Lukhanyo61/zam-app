import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBCard className='CardV' style={{ maxWidth: '1240px'  }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://zamfoundation.co.za/wp-content/uploads/2021/03/Congra.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle> Our latest star!</MDBCardTitle>
            <MDBCardText>
           
The foundation congratulates Noloyiso Madolo, 2019 beneficiary, on obtaining her code 10 drivers license. Her story is inspirational because after obtaining her learners license thru ZAM Foundation she didn’t sit around waiting for a handout. Instead she hustled and managed to pay for her own driving lessons. Against all odds she made it. A true story of self-reliance. No handouts, just hand ups. Well done Noloyiso.
            </MDBCardText>
            <MDBCardText>
              
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}