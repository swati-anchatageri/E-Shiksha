import { Box, Heading, } from "@chakra-ui/react"
import React from "react"
import { useState, useEffect } from "react"
const Mentor=()=>{
    const [mentors,setMentors]=useState([])
    const fetchMentors=()=>{
        fetch(`https://648cd60b8620b8bae7ed6ef4.mockapi.io/mentors`)
        .then((res)=>res.json())
        .then((data)=>{
            setMentors(data)
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    console.log(mentors)
    useEffect(()=>{
        fetchMentors()
    },[])
    
    return(
        <Box>
            <Box  display="flex" justifyContent="center" bg='white' w='90%' mt={10} p={4} color='teal.800'>
                <Heading as="h3" size="lg">Our Mentors at E-SHIKSHA</Heading>
            </Box>
            <Box width="100%" mt={5} display="grid" gridTemplateColumns="repeat(3,1fr)" gap="15px">
                {mentors.map((item)=>(
                    <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" width="100%"  p={5} >
                        <img src={item.avatar} alt={item.name} width="100%"/>
                        <Box width="100%" mt={10} p={5}>
                            <Box  bg='white' w='100%' p={4} color='teal.900'>
                                <Heading as="h3" size="lg">Mentor: {item.name}</Heading>
                            </Box>
                            <Box  bg='white' w='100%' p={4} color='teal.800'>
                                <Heading as="h3" size="md">Qualification: {item.qualification}</Heading>
                            </Box>
                            <Box  bg='white' w='100%' p={4} color='teal.700'>
                                <Heading as="h3" size="sm">Interests: {item.interests}</Heading>
                            </Box>
                            <Box  bg='white' w='100%' p={4} color='teal.600'>
                                <Heading as="h3" size="xs">Experience: {item.experience}</Heading>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
export default Mentor;