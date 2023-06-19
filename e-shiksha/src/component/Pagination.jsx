import { Button } from "@chakra-ui/react";
const Pagination=({cur,total,onclick})=>{
    const pre = (<Button
    color="teal"
    size="lg"
    isDisabled={cur<=1}
    onClick={()=>onclick(cur-1)}
    >
    Previous
    </Button>)
    //const current = (<Heading as="h3" size="md">{cur}</Heading>)
    const next =(<Button
    color="teal"
    size="lg"
    isDisabled={cur>=total}
    onClick={()=>onclick(cur+1)}>
        View More
    </Button>)
    return(
        <div>
            <div style={{display:"flex",justifyContent:"end", gap:"10px"}}>
                {pre}
                {next}
            </div>
        </div>
    )
}
export default Pagination;