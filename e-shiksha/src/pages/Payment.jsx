import { useParams, Link } from "react-router-dom"
import { Heading, Box, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Payment(){
    const {id}=useParams()
    const {authState}=useContext(AuthContext)
    const {username}=authState
    const [course,setCourse]=useState([])
    const [loading,setloading]=useState(false)
    const [error,setError]=useState(false)
    const fetchCourse=()=>{
        
        setloading(true)
        fetch(`https://648c01e78620b8bae7ec0cae.mockapi.io/api/cources/courseDetails/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setCourse(data)
            setloading(false)
        })
        .catch(()=>{
            setError(true)
            setloading(false)
        })
    }

    console.log(course)

useEffect(()=>{
    fetchCourse();
},[])
console.log(username)
if(loading){
    return(<Heading as="h3" size="md">Loading...</Heading>)
}
if(error){
    return(<Heading as="h3" size="md">{error}</Heading>)
}
    console.log(id)
    return(
        <Box display="grid" mt={20} justifyContent="center" width="90%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} borderColor="teal">
            <Box w='100%' p={4} mt={5} mb={10} color='teal'>
                <Heading as="h2" size="lg" letterSpacing='wide'>Your Payment is Successful..</Heading>
            </Box>
            <Box w='100%' p={4} mt={5} mb={10} color='teal.800'>
                <Heading as="h2" size="lg" letterSpacing='wide'>{`${username}`} is successfully enrolled for the {course.name} .</Heading>
            </Box>
            <Box w='100%' p={4} mt={5} mb={10} color='teal.800'>
                <Heading as="h2" size="lg" letterSpacing='wide'>Stay tuned for more information.</Heading>
            </Box>
            <Box w='100%' p={4} mt={5} mb={10} color='teal.800'>
                <Heading as="h2" size="lg" letterSpacing='wide'>Happy Learning..</Heading>
            </Box>
            <Box w='100%' p={4} mt={5} mb={10} color='teal.800'>
                <Heading as="h2" size="lg" letterSpacing='wide'>All The Best</Heading>
            </Box>
            <Box display="flex" justifyContent="end">
            <Button
            mt={4}
            size="lg"
            colorScheme='teal'
            type='submit'>
                <Link to="/">Go To Home</Link>
            </Button>
        </Box>
        </Box>
    )
}
