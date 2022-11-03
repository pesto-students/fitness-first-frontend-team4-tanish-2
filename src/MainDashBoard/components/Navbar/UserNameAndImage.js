import { Avatar } from '@chakra-ui/react'
import avatar from "../../images/avatar.jpg"
import { Text } from "@chakra-ui/react";
import "./CSS/UserNameAndImage.css";

export default function UserNameAndImage() {
    return (
        <div className='UserNameAndImage'>
            <Avatar size='lg' name='Dan Abrahmov' src={avatar} />
            <Text fontSize='lg'>Alex Grant</Text>
            <Text fontSize='sm'>Trainer</Text>
        </div>)
}