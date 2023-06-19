import {Box, Heading,Center,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"
const CourseDetails=({id,name,learnings,rules,start_date,end_date,qualification,instructor,rating,duration,days})=>{
    console.log(name,learnings,rules)
    return(
       <Box>
            <Box width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} borderColor="teal">
            <Box  bg='teal' w='100%' p={4} color='white'>
            <Heading as="h2" size="lg">Course: {name}</Heading>
            </Box>
            <br/>
            <Heading as="h4" size="md"  letterSpacing='wide' color="navy" mt="2">Qualification: {qualification}</Heading>
            <br/>
            <Heading as="h3" size="md"  letterSpacing='wide' color="teal">Start Date: {start_date} &bull; End Date: {end_date}</Heading>
            
            <Heading as="h4" size="md"  letterSpacing='wide' mt="2">Age limit: 21 tot 28 years.</Heading>
            <Heading as="h4" size="md"  letterSpacing='wide' color="navy" mt="2">Timings: {duration}</Heading>
            <Heading as="h4" size="md"  letterSpacing='wide' mt="2">Days per week: {days}</Heading>

            <Heading as="h4" size="md"  letterSpacing='wide' mt={2} >Instructor: {instructor}</Heading>
            <Heading as="h4" size="sm" letterSpacing="wide" mt={2} >Ratings: {rating}</Heading>
            <Center>
            <Button
            mt={4}
            size="lg"
            colorScheme='teal'
            type='submit'
            // onClick={handleClick}
          ><Link to={`/coursedetails/${id}`}>
            View Details
            </Link>
          </Button>
          </Center>
            </Box>
       </Box>
    )
}
export default CourseDetails;