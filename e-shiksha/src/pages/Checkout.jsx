import { Heading, Box, Button, Input,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";

const Checkout=()=>{
    const navigate=useNavigate();
    const [course,setCourse]=useState([])
    const [loading,setloading]=useState(false)
    const [error,setError]=useState(false)
    const [number,setNumber]=useState("")
    const [date,setDate]=useState("")
    const [cvv,setCvv]=useState("")
    const [amount,setAmount]=useState(null)
    const {id}=useParams();
console.log(number,cvv,date)
    const fetchCourse=()=>{
        
        setloading(true)
        fetch(`https://648c01e78620b8bae7ec0cae.mockapi.io/api/cources/courseDetails/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setCourse(data)
            setAmount(data.fees-data.fees*data.discount/100)
            //console.log(data.fees-data.fees*data.discount/100)
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
    fees,
    discount
}=course
if(loading){
    return(<Heading as="h3" size="md">Loading...</Heading>)
}
if(error){
    return(<Heading as="h3" size="md">{error}</Heading>)
}

    return(
      <Box width="90%" m={10} p={10}>
            <Box  bg='teal' w='100%' p={4} color='white'>
            <Heading as="h2" size="lg" letterSpacing='wide'>CheckOut Here</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" color="teal.800">Course: {name}</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" letterSpacing='wide' color="navy">Starts from {start_date} and ends on {end_date}.</Heading>
            </Box>
            <Box  bg='white' w='100%' p={4} color='teal'>
            <Heading as="h4" size="md" letterSpacing='wide' mt="10px" color="green.800">Amount to be paid: {fees-fees*discount/100}</Heading>
            </Box>
        <Box width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} borderColor="teal" >
        <Box  bg='teal' w='100%' p={4} mt={5} mb={10} color='white'>
        <Heading as="h2" size="lg" letterSpacing='wide'>Fill Your Card Details to Make Payment</Heading>
        </Box>
        <Box width="50%" borderRadius="5px" borderColor="red">
        <Text>Amount</Text>
            <Input 
            type="Number"
            value={amount}
            readOnly
             />
        </Box>
        <Box width="50%" borderRadius="5px" borderColor="red">
        <Text>Card</Text>
            <Input 
            type="Number"
            placeholder="Enter Card Number"
            onChange={(e)=>setNumber(e.target.value)}
             />
        </Box>
        <Box width="50%" borderRadius="5px" borderColor="red">
        <Text>Expire Date</Text>
            <Input 
            type="text"
            placeholder="Enter Expiry Date"
            onChange={(e)=>setDate(e.target.value)}
            required
             />
        </Box>
        <Box width="50%" borderRadius="5px" borderColor="red">
        <Text>CVV</Text>
            <Input 
            type="Number"
            placeholder="Enter CVV Number"
            onChange={(e)=>setCvv(e.target.value)}
            required
             />
        </Box>
        <Box display="flex" justifyContent="end">
            <Button
            mt={4}
            size="lg"
            colorScheme='teal'
            type='submit'
            onClick={()=>{
                if({cvv}==="" && {number}==="" && {date}===""){
                    alert(`Please fill out the details.`)
                }else{
                    navigate(`/payment/${id}`)
                }
            }}>
                Make Payment
            </Button>
        </Box>
        </Box>
      </Box>
    )
}
export default Checkout;