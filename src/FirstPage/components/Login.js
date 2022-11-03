import "./css/login.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,

} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import React ,{useState}from "react";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");

  function loginUser(){
    navigate('dashboard')
        //   let loginObject = {
        //     user_id : user_email,
        //     trainer_password : user_password
        //   }
        //   const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(loginObject)
        // };
        // fetch('http://localhost:8080/getTrainerLoginDetails', requestOptions)
        //     .then(response => response.json())
        //     .then(data =>{
        //     if(data)
        //       navigate('dashboard');
        //     else
        //       navigate('/');}).catch((error) => console.log(error));
  }

  function testing(){
    console.log("email is : ", user_email);
    console.log("password is : ", user_password);
  }
  testing();

  function getEmail(event){
    setUserEmail(event.target.value);
  }

  function getPassword(event){
    setUserPassword(event.target.value);
  }


  return (
    <div className="login">
      <Tabs variant="solid-rounded" size="lg">
        <TabList>
          <Tab color="#FFE300">Trainer</Tab>
          <Tab color="#FFE300">Trainee</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="emailpassword">
              <div className="email">
                <Input onChange={getEmail} p={7} color="#ffffff" placeholder="Email" size="md" />
              </div>
              <div className="password">
                <InputGroup size="md">

                  <Input
                    p={7}
                    onChange={getPassword}
                    color="#ffffff"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />


                  <InputRightElement width="4.5rem">
                    <div className="showhidebutton">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </div>

                  </InputRightElement>


                </InputGroup>
              </div>

            </div>
            <div className="loginsignupbutton"><div className="loginbutton">
              <Button onClick={loginUser} p={7} bg="#FFE300" rightIcon={<ArrowForwardIcon />}>
                LOGIN
              </Button>
            </div>
              <div className="signupbutton">
                <Button p={7} bg="#FFE300">SIGN UP</Button>
              </div>
            </div>

          </TabPanel>
          <TabPanel>
            <div className="emailpassword">
              <div className="email">
                <Input p={7} color="#ffffff" placeholder="Email" size="md" />
              </div>
              <div className="password">
                <InputGroup size="md">
                  <Input
                    p={7}

                    color="#ffffff"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />


                  <InputRightElement width="4.5rem">
                    <div className="showhidebutton">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </div>

                  </InputRightElement>


                </InputGroup>
              </div>

            </div>
            <div className="loginsignupbutton"><div className="loginbutton">
              <Button p={7} bg="#FFE300" rightIcon={<ArrowForwardIcon />}>
                LOGIN
              </Button>
            </div>
              <div className="signupbutton">
                <Button p={7} bg="#FFE300">SIGN UP</Button>
              </div>
            </div>

          </TabPanel>

        </TabPanels>
      </Tabs>
    </div>
  );
}
