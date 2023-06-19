import { Link, useNavigate } from "react-router-dom";
import { Heading,
Box,
FormControl,
FormLabel,
InputGroup,
Input,
Button,
Center} from "@chakra-ui/react";
import { useState } from "react";
const SignUp=()=>{
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phno,setPhno]=useState("")

    const handleClick=(e)=>{
        e.preventDefault();
        fetch(`https://648c01e78620b8bae7ec0cae.mockapi.io/api/cources/users`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name:name,email:email,password:password,phno:phno})
        })
        .then(()=>{
            alert(`Data Submitted: Name: ${name} Email: ${email} Password: ********** Phone Number: ${phno}`);
            setName("")
            setEmail("")
            setPassword("")
            setPhno("")
           
        })
        .then(()=>{
            navigate(`/login`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <br/>
        <br/>
        <Center>
        <Heading as='h3' size='md'>
        Register here to get started..
        </Heading>
        </Center>
        <br/>
        <Center>
        <Box border="solid teal 1px " width="xl" margin="20px" padding={20} borderRadius={20} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <Box>
            <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input 
                          type="name"
                          name="name" 
                          size="md" 
                          value={name} 
                          onChange={(e)=>setName(e.target.value)} 
                          />
                        </InputGroup>
            </FormControl>
            </Box>
            <br/>
            <Box>
            <FormControl id="phno">
                        <FormLabel>Phone Number</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input 
                          type="number"
                          name="phno" 
                          size="md" 
                          value={phno} 
                          onChange={(e)=>setPhno(e.target.value)} 
                          />
                        </InputGroup>
            </FormControl>
            </Box>
            <br/>
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
            <br/>
            <br/>
            <Box>
            <Center>
            <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handleClick}
          >
            Submit
          </Button>
          </Center>
          </Box>
          </Box>
          </Center>
        <br/>
        <br/>
        <Center>
        <Heading as='h3' size='md'>
        Already Have an Account <Link to="/login" style={{color:"teal"}}>Get Started</Link>
        </Heading>
        </Center>
        </>
    )
}

export default SignUp;