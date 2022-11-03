import { Heading } from "@chakra-ui/react";
import { Box ,Input,FormControl,Text} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import "./header.css";
export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="Header">
            <>
 

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <Heading size='md'>Write a Post</Heading>
            <Text fontSize='sm'>Inspire others to workout.</Text>
             
              <Input type={Text} placeholder='What are you feeling today ?' />
            </FormControl>
           
          </ModalBody>

          <ModalFooter>
            
          <Button onClick={onOpen} borderRadius={0} borderColor='#000000' border='2px' _hover={{ bg: '#ffe300', color: '#000000' }} p={4} rightIcon={<ArrowForwardIcon />} variant='outline'>
                        POST
                    </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
            <div className="greetings">

                <Heading size="md">
                    Hi, Alex!
                </Heading>

                <Heading fontWeight={1} size="sm">
                    What are you up to today?
                </Heading>

                <div >
                    <Box
                        as='button'
                        p={3}
                        fontSize='10px'
                        fontWeight='extrabold'
                        borderRadius='10px'
                        color='#000000'
                    >
                        LOGOUT
                    </Box>
                </div>
            </div>

            <div className="NewPostAndMeetingButtons">
                <div className="NewPostButton">
                    <Button onClick={onOpen} borderRadius={0} borderColor='#000000' border='2px' _hover={{ bg: '#ffe300', color: '#000000' }} p={6} rightIcon={<ArrowForwardIcon />} variant='outline'>
                        NEW POST
                    </Button>
                    
                </div>
                <div className="NewMeetingButton">
                    <Button borderRadius={0} borderColor='#000000' border='2px' _hover={{ bg: '#ffe300', color: '#000000' }} p={6} rightIcon={<ArrowForwardIcon />} variant='outline'>
                        NEW MEETING
                    </Button>
                </div>

            </div>
        </div>
    )
}