import "./CSS/Menu.css";
import { Box } from '@chakra-ui/react'
export default function Menu(props) {

    function setMenu(menuClicked){
        props.setMenu(menuClicked);
    }
    return (
        <div className="menu">
            <Box
                as='button'
                p={3}
                fontSize='14px'
                fontWeight='semibold'
                borderRadius='10px'
                color='#FFFFFF'
                _hover={{ bg: '#ffe300', color: '#000000' }}
                _active={{
                    bg: '#ffe300',
                    transform: 'scale(0.98)',
                    color: '#000000'

                }}
                onClick = {()=>setMenu("dashBoard")}
            >
                DASHBOARD
            </Box>
            <Box
                as='button'
                p={3}
                fontSize='14px'
                fontWeight='semibold'
                borderRadius='10px'
                color='#FFFFFF'
                _hover={{ bg: '#ffe300', color: '#000000' }}
                _active={{
                    bg: '#ffe300',
                    transform: 'scale(0.98)',
                    color: '#000000'

                }}
                onClick = {()=>setMenu("clients")}
            >
                CLIENTS
            </Box>
            <Box
                as='button'
                p={3}
                fontSize='14px'
                fontWeight='semibold'
                borderRadius='10px'
                color='#FFFFFF'
                _hover={{ bg: '#ffe300', color: '#000000' }}
                _active={{
                    bg: '#ffe300',
                    transform: 'scale(0.98)',
                    color: '#000000'

                }}
                onClick = {()=>setMenu("profile")}
            >
                MY PROFILE
            </Box>
            <Box
                as='button'
                p={3}
                fontSize='14px'
                fontWeight='semibold'
                borderRadius='10px'
                color='#FFFFFF'
                _hover={{ bg: '#ffe300', color: '#000000' }}
                _active={{
                    bg: '#ffe300',
                    transform: 'scale(0.98)',
                    color: '#000000'

                }}
                onClick = {()=>setMenu("exercise")}
            >
                EXERCISES
            </Box>
            <Box
                as='button'
                p={3}
                fontSize='14px'
                fontWeight='semibold'
                borderRadius='10px'
                color='#FFFFFF'
                _hover={{ bg: '#ffe300', color: '#000000' }}
                _active={{
                    bg: '#ffe300',
                    transform: 'scale(0.98)',
                    color: '#000000'

                }}
                onClick = {()=>setMenu("diets")}
            >
                DIETS
            </Box>
            <Box
                as='button'
                p={3}
                fontSize='14px'
                fontWeight='semibold'
                borderRadius='10px'
                color='#FFFFFF'
                _hover={{ bg: '#ffe300', color: '#000000' }}
                _active={{
                    bg: '#ffe300',
                    transform: 'scale(0.98)',
                    color: '#000000'

                }}
                onClick = {()=>setMenu("settings")}
            >
                SETTINGS
            </Box>
        </div>
    )
}