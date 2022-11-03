import React from 'react';
import './MyProfileMain.css'
import { Avatar, Heading, Input, Text } from '@chakra-ui/react'
import avatar from "./images/avatar.jpg"
import { useState } from 'react';

import { EditText } from 'react-edit-text';

import linkedinIcon from "./images/linkedin.png";
import facebookIcon from "./images/facebook.png";
import instaicon from "./images/insta.jpg";
import emailicon from "./images/email.png";
import phoneicon from "./images/phone.jpg";

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function MyProfileMain() {
  // let value = 3; 

let [Value, SetValue]=useState("");

  function SetValueHandler(e){
   SetValue(e.target.value*10);
  }
  return (
    <div className='MyProfileMain'>
      <div className='ProfileAndSocialMediaLinks'>
        <Avatar size='2xl' name='Dan Abrahmov' src={avatar} />
        <div>
          <Heading size="xl">
            Alex Grant
          </Heading>
          <Heading size="md">
            Gym Trainer
          </Heading>
        </div>
        <div className='SocialMediaLinks'>






          <div className='fb-link'>

            <Avatar size='xs' src={facebookIcon} />
            <EditText
              defaultValue=" https://www.facebook.com/help/2053403608222571"
            />


          </div>







          <div>
            <Avatar size='xs' src={linkedinIcon} />
            <EditText
              defaultValue=" https://www.linkedin.com/feed/"
            />


          </div>







          <div>

            <Avatar size='xs' src={instaicon} />
            <EditText
              defaultValue="https://www.instagram.com/accounts/login/"
            />
          </div>
          <div>          <Avatar size='xs' src={emailicon} />
            <EditText
              defaultValue=" https://mail.google.com/mail/u/1/#inbox"
            />

          </div>




          <ul>+91-7777888844 <Avatar size='xs' name='linkedin icon' src={phoneicon} /></ul>
        </div>
      </div>

      <div className='Summary'>

        <Text className='description' fontSize='lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper ex eu aliquam scelerisque. Duis suscipit, enim sit amet rutrum efficitur, nisl ligula placerat nunc, nec accumsan mi enim at turpis. Fusce malesuada ornare massa auctor accumsan. Nam vel mi at turpis consectetur fermentum. In cursus sed nibh quis accumsan. Fusce malesuada diam dui, nec congue tortor fringilla id. Morbi egestas quis elit eu tincidunt. Nulla sed rhoncus nunc. Phasellus tortor orci, tempus non lacus et, tempor malesuada dui.</Text>
      </div>


      <div className='MySkills'>
        <div>
          <div><CircularProgress value={53} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>5.3/10</CircularProgressLabel>
          </CircularProgress>
            <text> weight loss</text>
          </div>
          <div><CircularProgress value={40} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>4.0/10</CircularProgressLabel>
          </CircularProgress>
            <text> weight Gain</text>
          </div>
          <div><CircularProgress value={87} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>8.7/10</CircularProgressLabel>
          </CircularProgress>
            <text> Yoga</text>
          </div>
        </div>

        <div>





          <div >
          
            <CircularProgress value={Value} color='#FFE300' thickness='5px' size='100px' >
              <CircularProgressLabel><Input onChange={SetValueHandler}/>/10</CircularProgressLabel>
            </CircularProgress>

            <text> Zumba</text>
          </div>





          <div><CircularProgress value={40} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>4.0/10</CircularProgressLabel>
          </CircularProgress>
            <text> Muscle Gain</text>
          </div>
          <div><CircularProgress value={96} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>9.6/10</CircularProgressLabel>
          </CircularProgress>
            <text> Calesthenics</text>
          </div>
        </div>
        <div>
          <div><CircularProgress value={60} thickness='5px' color='#FFE300' size='100px' >
            <CircularProgressLabel>6.0/10</CircularProgressLabel>
          </CircularProgress>
            <text> weight loss</text>
          </div>
          <div><CircularProgress value={67} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>6.7/10</CircularProgressLabel>
          </CircularProgress>
            <text> weight loss</text>
          </div>
          <div><CircularProgress value={42} color='#FFE300' thickness='5px' size='100px' >
            <CircularProgressLabel>4.2/10</CircularProgressLabel>
          </CircularProgress>
            <text> weight loss</text>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MyProfileMain;
