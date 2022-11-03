import React from 'react';
import './ClientMain.css'
import { Input } from '@chakra-ui/react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import avatar from './images/avatar.jpg'
import { Avatar } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
// import { Divider } from '@chakra-ui/react'
import { Heading } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';




function ClientMain() {
  return (
    <div className='ClientMain'>
      <div className='ClientListAndSearchBar'>
        <InputGroup>
          <InputLeftElement children={<SearchIcon color='gray.300' />} />
          <Input placeholder='Enter Client Name' />
        </InputGroup>

        <div className='AvatarNameActivityAndGender'>
          <div className='AvatarNameActivityGender'>
            <Avatar size='md' name='Dan Abrahmov' src={avatar} />
            <div >
              <Heading size="sm">
                Alex Grant
              </Heading>
              <Text fontSize='sm'>2d ago, Male</Text>
            </div>
          </div>
          <div className='FollowActivateButton'>
            <div className='hide'> <Button size="sm" p={4} _hover={{ bg: '#ffe300', color: '#000000' }} rightIcon={<ArrowForwardIcon />} variant='outline'>
              Follow
            </Button></div>

            <div className='ActivateButton'>
              <Button size="sm" p={4} _hover={{ bg: '#ffe300', color: '#000000' }} rightIcon={<ArrowForwardIcon />} variant='outline'>
                Activate
              </Button>
            </div>

          </div>
        </div>





      </div>




      <div className='ClientProfile'>
        <div className='BGBoxOutside'>

          <div className='BGBoxInside'>
            <Avatar className='ProfileImage' size='2xl' name='Dan Abrahmov' src={avatar} />
          </div>
          <div className='Profileinfo'>
            <Heading size="sm">
              Alex Grant
            </Heading>
            <Text fontSize='sm'>2d ago, Male</Text>
            <Button size="sm" bg='#FFBEAF' variant='ghost' borderRadius={0} p={2} borderColor='#000000' border='1px' _hover={{ bg: '#ffe300', color: '#000000' }} >
              Inactive
            </Button>
          </div>
        </div>


        <div className='FollowingPostFollowers'>
          <div className='following'>
            <Heading size="sm">

              Following
            </Heading>
            <Text fontSize='2xl'>21</Text></div>
          <div className='post'>
            <Heading size="sm">
              Posts
            </Heading>
            <Text fontSize='2xl'>21</Text>
          </div>
          <div className='follower'>
            <Heading size="sm">
              Followers
            </Heading>
            <Text fontSize='2xl'>21</Text>
          </div>



        </div>
        <div className='GoalAndJoined'>
          <Heading className='Goal' size="sm">
            Muscle Gain
          </Heading>
          <Heading className='JoinedTime' size="sm">
            Joined a year ago
          </Heading>
        </div>
        <div className='Line'></div>
        <div className='MobileNumber'>
          <Heading size="sm">
            Mobile
          </Heading>
          <Text>+91- 0000000000</Text>
        </div>
        <div className='Line'></div>
        <div className='EmailId'>
          <Heading size="sm">
            Email
          </Heading>
          <Text>alexgrant@gmail.com</Text>
        </div>
        <div className='Line'></div>
        <div className='DietWorkout'>
          <Button className='DietButtonOnProfile' size="sm" p={6} _hover={{ bg: '#ffe300', color: '#000000' }} rightIcon={<ArrowForwardIcon />} variant='ghost'>
            Diet
          </Button>
          <div className='LineVertical'></div>
          <Button className='DietButtonOnProfile' size="sm" p={6} _hover={{ bg: '#ffe300', color: '#000000' }} rightIcon={<ArrowForwardIcon />} variant='ghost'>
            Workout
          </Button>
        </div>
        <div className='Line'></div>
        <div className='ViewProfileButton'> <Button className='DietButtonOnProfile' size="sm" p={6} _hover={{ bg: '#ffe300', color: '#000000' }} rightIcon={<ArrowForwardIcon />} variant='ghost'>
          View Profile
        </Button>
        </div>

      </div>






    </div >
  );
}

export default ClientMain;
