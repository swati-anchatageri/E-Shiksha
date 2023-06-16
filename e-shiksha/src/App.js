import './App.css';
import { useContext } from 'react';
import Navbar from './component/Navbar';
import AllRoutes from "./router/AllRoutes"
import logo from "./E-Shiksha.png"
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Heading } from '@chakra-ui/react';
function App() {
const {logoutUser,authState}=useContext(AuthContext)

const handleClick=()=>{
  logoutUser()
} 
  return (
    <>
    <div className="App" style={{width:"90%", height:"40px",display:"grid", gridTemplateColumns:"repeat(3,1fr)",margin:"10px",padding:"10px",gap:"20px"}}>
      <div style={{textAlign:"left",display:"flex",alignItems:"start",justifyContent:"center" }} >
        <img src={logo} width={80} alt="E-SHIKSHA"/>
      </div>
      <div >
        <Navbar/>
      </div>
      
      <div style={{display:"flex",flexDirection:"row", gap:"30px",justifyContent:"right"}}>
        {authState.isAuth?"":(<Link to="/signup" style={{textDecoration:"none",fontSize:"20px",fontWeight:"bold",color:"black"}}>Sign In</Link>)}
        
        {authState.isAuth?
          (<Heading as="h3" size="md">
              {authState.username}
            </Heading>)
            :""
        }

          {authState.isAuth?
            (<Link to="/" >
              <button onClick={handleClick} style={{textDecoration:"none",fontSize:"16px",fontWeight:"bold",color:"white",backgroundColor:"black", borderRadius:"20px",height:"30px", width:"120px"}} >
              Sign Out
              </button>
              </Link>)
              :
              (<Link to="/login" >
                <button onClick={handleClick} style={{textDecoration:"none",fontSize:"16px",fontWeight:"bold",color:"white",backgroundColor:"black", borderRadius:"20px",height:"30px", width:"120px"}} >
                  Get Started
                </button>
            </Link>)
          }
      </div>
      
    </div>
    <div style={{display:"flex",alignItems:"center", justifyContent:"center", margin:"auto",padding:"20px"}}>
    <div>
    <AllRoutes />
    </div>
      
      </div>
      </>
  );
}

export default App;
