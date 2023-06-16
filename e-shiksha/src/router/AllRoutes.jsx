import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import CourseDetails from "../pages/CourseDetails";
import CourseList from "../pages/courseList";
import Mentor from "../pages/Mentor";
import Signup from "../pages/SignUp";
import Payment from "../pages/Payment";
import {Route, Routes} from "react-router-dom";

const AllRouter=()=>{
    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/course" element={<CourseList/>}/>
                <Route path="/coursedetails/:course_id" element={<CourseDetails/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/mentors" element={<Mentor/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
    )
}
export default AllRouter;