import "./NewsFeed.css"
import avatar from '../newsFeed/images/avatar.jpg'
import { Avatar } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
import { Heading } from "@chakra-ui/react";
import thumbsup from './icons/thumbsup.png'
import heart from './icons/heart.png'
// import { Icon } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";




export default function NewsFeed() {



    const [GetNewsFeedData, setGetNewsFeedData] = useState([]);
    const [GetUserData, setGetUserData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (res) {



                setGetNewsFeedData(res.data)

            })

            .catch(function (err) {
                console.log(err);
            })

            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {



                setGetUserData(response.data)
                console.log(GetUserData[0].name)

            })

            .catch(function (error) {
                console.log(error);
            })


    })


    
    return (


        <div className="newsfeed">

            {GetNewsFeedData.map((data) => {
                return (
                    <div>
                        <div className="profile">
                            <Avatar size='lg' name='Dan Abrahmov' src={avatar} />
                            <div className="NameAndActive">
                                <Heading size="md">
                                  {data.userId}
                                </Heading>

                                <Text fontSize='sm'>2d ago</Text>
                            </div>

                        </div>
                        <div className="PostDescription">{data.body}</div>

                        <div className="ThumbsUpAndLikeIcons">
                            <button className="thumbsupicon"> <Image src={heart} alt="hearticon" /></button>
                            <button className="thumbsupicon">
                                <Image src={thumbsup} alt="thumbsupicon" />
                            </button>
                        </div>

                        <Divider />
                    </div>
                )
            })}





        </div>
    )
}