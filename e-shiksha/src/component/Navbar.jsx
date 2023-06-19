import {Link} from "react-router-dom";
import {Flex} from "@chakra-ui/react";
import React from "react";
const Navbar=()=>{
const links=[
    {
        title:"Home",
        path:"/"
    },
    {
        title:"Courses",
        path:"/course"
    },
    {
        title:"Mentors",
        path:"/mentors"
    },
    {
        title:"About",
        path:"/about"
    },
    // {
    //     title:"SignUp",
    //     path:"/signup"
    // },
    // {
    //     title:"Get Started",
    //     path:"/login"
    // },   
]

return(
    <Flex justifyContent={"space-between"}>
    {links.map((link)=>(
        <Link style={{textDecoration:"none",fontSize:"20px",fontWeight:"bold",color:"black"}} key={link.path} to={link.path}>{link.title}</Link>
    ))}
    </Flex>
)
}
export default Navbar;