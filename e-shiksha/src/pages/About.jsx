import { Box, Heading, Text, Image } from "@chakra-ui/react";
import image from "../aboutus.jpg"
const About = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box flex="1" mr={8}>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor auctor,
            lobortis odio ac, viverra urna. Ut nec tincidunt purus, nec pellentesque ex.
          </Text>
          <Text fontSize="xl" mt={4}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Fusce vel ipsum eu leo consequat luctus a nec nisi. Sed ut nibh vel mi tempor
            semper sit amet sit amet nunc.
          </Text>
        </Box>
        <Box flex="1">
          <Image src={image} alt="About Us" borderRadius="md" />
        </Box>
      </Box>
    </Box>
  );
};
export default About;