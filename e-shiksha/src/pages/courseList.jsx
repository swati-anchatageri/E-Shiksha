import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import CourseDetails from "./CourseDetails";
import Pagination from "../component/Pagination";
const CourseList=()=>{
    const [loading, setLoading]=useState(false)
    const [err, setErr]=useState(false)
    const [courses,setCourses]=useState([])
    const [pages,setPage]=useState(1)
    const [total]=useState(3)

    const fetchCourse=(pages)=>{
        setLoading(true)
        fetch(`https://648c01e78620b8bae7ec0cae.mockapi.io/api/cources/courseDetails?page=${pages}&limit=2`)
        .then((res)=>res.json())
        .then((data)=>{
            setCourses(data)
            setLoading(false)
        })
        .catch((err)=>{
            setErr(true)
            setLoading(false)
        })
    }
    useEffect(()=>{
        fetchCourse(pages)
    },[pages])

    if(loading){
        return(
            <Heading as="h2" size="lg">Loading...</Heading>
            )
    }

    if(err){
        return(
            <Heading as="h2" size="lg">{err}</Heading>
        )
    }
    return(<>
        <div style={{display:"grid", width:"100%", gap:"10px", gridTemplateColumns:"repeat(2,1fr)",margin:"20px",alignItems:"center", justifyContent:"center"}}>
            {courses.map((item)=>(
                <CourseDetails key={item.id} {...item}/>
            ))}
        </div>
        <div>
            <Pagination cur={pages} onclick={(e)=>setPage(e)} total={total}/>
        </div>
        </>
    )
}
export default CourseList;