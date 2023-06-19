import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Button,
    Heading, 
    Box,
    Center
  } from '@chakra-ui/react'
import { useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";
const Login=()=>{
    const navigate=useNavigate()
    const {loginUser,authState}=useContext(AuthContext)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log(loginUser,authState)
    const handleClick=(e)=>{
        e.preventDefault()
        fetch(`https://648c01e78620b8bae7ec0cae.mockapi.io/api/cources/users`)
        .then((res)=>res.json())
        .then((data)=>{
            data=data.filter((user)=>(
                email===user.email && password===user.password
            ))
            console.log(data[0].name)
            loginUser(data[0].name)
        }).then(()=>navigate(`/course`))
    }
    console.log(email,password)
    return(
        <>
        <br/>
        <Center>
        <Heading as='h3' size='md'>
             Get Started by loging in here..
        </Heading>
        </Center>
            <br/>
            
            <Center>
            <Box border="solid teal 1px " boxSize="sm" width="xl" margin="20px" padding={20} borderRadius={20} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <Box>
            <FormControl id="email">
                        <FormLabel>E-Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input 
                          type="email"
                          name="email" 
                          size="md" 
                          value={email} 
                          onChange={(e)=>setEmail(e.target.value)} 
                          />
                        </InputGroup>
            </FormControl>
            </Box>
            <br/>
            <Box>
            <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input 
                          type="Password" 
                          name="password"
                          size="md" 
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          />
                        </InputGroup>
            </FormControl>
            </Box>
            <Box>
            
            <Center>
            <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handleClick}
          >
            Login
          </Button>
          </Center>
          </Box>
          </Box>
          </Center>
              <br/>
              <br/>
        <Center>
        <Heading as='h3' size='md'>
        Not yet Registered.? <Link to="/signup" style={{color:"teal"}}>Register Here</Link>
        </Heading>
        </Center>
       
            <br/>
        </>
    )
}

export default Login;