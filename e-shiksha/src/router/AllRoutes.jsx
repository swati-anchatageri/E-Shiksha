import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import CourseList from "../pages/courseList";
import Mentor from "../pages/Mentor";
import Signup from "../pages/SignUp";
import Payment from "../pages/Payment";
import {Route, Routes} from "react-router-dom";
import SingleCourse from "../pages/SingleCourse";
import PrivateRouter from "./PrivateRouter";
const AllRouter=()=>{
    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/course" element={
                <PrivateRouter>
                    <CourseList/>
                </PrivateRouter>
                }/>
                <Route path="/coursedetails/:id" element={<SingleCourse/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/payment/:id" element={<Payment/>}/>
                <Route path="/mentors" element={<Mentor/>}/>
                <Route path="/checkout/:id" element={<Checkout/>}/>
            </Routes>
    )
}
export default AllRouter;