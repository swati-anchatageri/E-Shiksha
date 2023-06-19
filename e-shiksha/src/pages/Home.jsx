import { Link } from "react-router-dom"
import {Box,Button} from "@chakra-ui/react"
import image from "../image.jpeg";
import image2 from "../image2.jpeg";
import image3 from "../image3.jpeg";
import image4 from "../image4.jpeg";
const Home=()=>{
return(
   <Box>
    <Box 
    position="relative"
    display="flex"
    alignItems="flex-end"
    justifyContent="flex-start"
    width='100%'
    py={350}
    bgImage={image}
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
    >
        <Box position="absolute" bottom={10} left={60} >
          <Button colorScheme="red" borderRadius="20px" width={200} fontSize={20} fontWeight="bold"><Link to="/login">Get Started</Link></Button>
        </Box>
    </Box>
    <Box>
        <img src={image2} alt="image2" width="100%"/>
    </Box>
    <Box>
        <img src={image4} alt="image4" width="100%"/>
    </Box>
    <Box>
        <img src={image3} alt="image3" width="100%"/>
    </Box>
   </Box>
)
}
export default Home;