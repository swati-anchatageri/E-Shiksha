import { Heading,Box,UnorderedList,ListItem, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCourse=()=>{
    const [course,setCourse]=useState([])
    const [loading,setloading]=useState(false)
    const [error,setError]=useState(false)
    const [learn,setLearn]=useState(false)
    const [dis,setDis]=useState(false)
    const [rule,setRule]=useState(false)
    const {id}=useParams();
console.log(id)
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

const {
    name,
    start_date,
    end_date,
    qualification,
    fees,
    discount,
    intro,
    learnings,
    rules,
    description,
    duration,
    days,
    instructor,
    rating
}=course
console.log(learnings)
if(loading){
    return(<Heading as="h3" size="md">Loading...</Heading>)
}
if(error){
    return(<Heading as="h3" size="md">{error}</Heading>)
}

    return(
        <Box width="100%" mt={20} borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} borderColor="teal">
        <Box  bg='teal' w='100%' p={4} color='white'>
            <Heading as="h2" size="lg" letterSpacing='wide'>Course: {name}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" color="green.600">Ratings: {rating}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" color="teal.800">Qualification: {qualification}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal.800'>
            <Heading as="h4" size="md">Age limit: 21 tot 28 years.</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal.800'>
            <Heading as="h4" size="md" color="maroon">Instructor: {instructor}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" letterSpacing='wide' color="navy">Start Date: {start_date} &bull; End Date: {end_date}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" color="teal">Timings: {duration}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" letterSpacing='wide' color="teal">Days Per Week: {days}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" letterSpacing='wide' marginBottom="10px" color="red">Fees: ₹{fees} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Discount: {discount}%</Heading>
            <Heading as="h4" size="md" letterSpacing='wide' mt="10px" color="green.800">Payable Fees with GST: ₹{fees-fees*discount/100}</Heading>
            </Box>
            <Box  bg='white' w='100%' mb={10} p={2} color='black'>
            <Heading as="h4" size="lg" letterSpacing='wide' marginBottom="10px" color="teal">Introduction</Heading>
            <Heading as="h4" size="md" letterSpacing='wide' color="teal.800">{intro}</Heading>
            </Box>
            <Box>
            <Button
            mb={10}
            size="lg"
            colorScheme='teal' 
            variant='outline'
            onClick={()=>setLearn(!learn)}>
                {learn?"Hide Learnings":"Show Learnings"}
            </Button>
            </Box>
           
            {
                learn?(<Box mb={10} bg='white' w='100%' p={2} color='black' borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor="teal">
            <br/>
            <Heading as="h3" size="md" m={5}>Learnings: </Heading>
            <UnorderedList> 
            {
                learnings.map((ele,index)=>(
                   ( <ListItem key={index}>{ele}</ListItem>)
                ))
            }
            </UnorderedList>
            </Box>):""
            }

            {/* discription */}
            <Box>
            <Button
            mb={10}
            size="lg"
            colorScheme='teal' 
            variant='outline'
            onClick={()=>setDis(!dis)}>
                {dis?"Hide discription":"Show discription"}
            </Button>
            </Box>
            
            {
                dis?(<Box mb={10} bg='white' w='100%' p={2} color='black' borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor="teal">
            <br/>
            <Heading as="h3" size="md" m={5}>discription: </Heading>
            <UnorderedList> 
            {
                description.map((ele,index)=>(
                   ( <ListItem key={index}>{ele}</ListItem>)
                ))
            }
            </UnorderedList>
            </Box>):""
            }
            {/* Rules */}

            <Button
            mb={10}
            size="lg"
            colorScheme='teal' 
            variant='outline'
            onClick={()=>setRule(!rule)}>
                {rule?"Hide Rules":"Show Rules"}
            </Button>
            {
                rule?(<Box  bg='white' w='100%' p={2} mb={10} color='black' borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor="teal">
            <br/>
            <Heading as="h3" size="md" m={5}>Rules: </Heading>
            <UnorderedList> 
            {
                rules.map((ele,index)=>(
                   ( <ListItem key={index}>{ele}</ListItem>)
                ))
            }
            </UnorderedList>
            </Box>
            )
            :""
            }
            <Box display="flex" justifyContent="end">
                <Button
                bg="teal"
                color="white"
                size="lg"
                ><Link to={`/checkout/${id}`}>Enroll</Link></Button>
            </Box>
        </Box>
        
    )
}
export default SingleCourse;