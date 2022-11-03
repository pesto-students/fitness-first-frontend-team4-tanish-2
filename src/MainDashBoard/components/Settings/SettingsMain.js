import React from 'react';
import { Heading, Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  
  Tr,
  Th,
  
  TableContainer,
} from '@chakra-ui/react'
import './SettingsMain.css'
// import EdiText  from 'react-editext';
import { EditText as EdiText } from 'react-edit-text';
function SettingsMain() {


  let userDetails = {
    name :" Chinmay patil",
    emailid:"cvkp20@gmail.com",
    password :"alllpassword",
    phone:"8390660066",
    dateofbirth:"2022-09-20",
    membershipfee:"2000"

  
  }
 
  return (
    <div className='SettingsMain'>
      <Heading size='lg'>General Account Settings</Heading>
      <div className='Line'></div>
      <div className='SettingsMenu'>

      <TableContainer>
  <Table size='lg' variant='simple'>
   
    <Thead>
      <Tr>
        <Th>Name :</Th>
        <Th><EdiText
        type='text'
        value={userDetails.name}
      
      /></Th>
        <Th isNumeric> Email Id :</Th>
        <Th><EdiText
        type='text'
        value={userDetails.emailid}
      
      /></Th>
      </Tr>
    </Thead>
    <Thead>
      <Tr>
        <Th>Password :</Th>
        <Th><EdiText
        type='text'
        value={userDetails.password}
      
      /></Th>
        <Th isNumeric>Phone :</Th>
        <Th><EdiText
        type='text'
        value={userDetails.phone}
      
      /></Th>
      </Tr>
    </Thead>
    <Thead>
      <Tr>
        <Th>Date of Birth :</Th>
        <Th>
        <EdiText
        type='date'
        value={userDetails.dateofbirth}
      
      /></Th>
        <Th isNumeric>Membership Fee :</Th>
        <Th><EdiText
        type='text'
        value={userDetails.membershipfee}
        
      
      />
      </Th>
      </Tr>
    </Thead>
  </Table>
  <div className='SaveDiscardButtons'>
  <Button>Save Changes</Button>
  <Button>Discard Changes</Button>
  </div>
</TableContainer>
        
      </div>
    </div>
  );
}

export default SettingsMain;
