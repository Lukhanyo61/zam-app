import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
 
  MDBBtn
} from 'mdb-react-ui-kit';

function Nominate() {
  return (
    <div>
   <section class="banner" >
  <h1 id="Nh1" class="text-center" >Get nominate as a beneficiary</h1>

<div id="nominate" class="container">
 
  <form>
    <h5 id="Nh5" class="text-center" >Fill in the form to be our next beneficiary</h5>
      <MDBRow style={{marginTop:"50px"}} className='mb-4'>
        <MDBCol>
          <MDBInput type='text' id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput type='text' id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' type='number' id='form6Example3' label='Physical Address' />
      <MDBInput wrapperClass='mb-4' type='number' id='form6Example4' label='ID Number' />
      <MDBInput wrapperClass='mb-4' type='number' id='form6Example5' label='Contact Number' />
      <MDBInput wrapperClass='mb-4' type='number' id='form6Example6' label='Highest Grade Completed' />

      <MDBInput wrapperClass='mb-4' type='textarea' id='form6Example7' rows={4} label='Additional information' />

     

      <MDBBtn id='btn-buck' className='mb-4' type='submit' block>
        Submit
      </MDBBtn>
    </form>
    </div>
</section>

    </div>
  );
}

export default Nominate;
