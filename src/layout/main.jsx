import '../App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Khodnegar from '../pages/khodnegar'
import Rokhnegar from '../pages/rokhnegar'
import LicenseGenerate from '../pages/licenseGenerate'
import Profile from '../pages/profile'
import Login from '../pages/login'
import { ProtectedRoute } from './protectedRoute'
import Signup from '../pages/signup'
import Calculate from '../components/Calculate'
import Progress from '../components/progress'
// import { useContext } from 'react'

// import { UserContext } from '../context/context'
// import Test from '../components/test'

function Main() {
  //  const [token, setToken] = useContext(UserContext);
  
  return (
    <>
     
      <Routes>
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />  

        {/* protected route */}

        <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/khodnegar" element={<Khodnegar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rokhnegar" element={<Rokhnegar />} />
        <Route path="/generate" element={<LicenseGenerate />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/details" element={<Progress />} />        
        </Route>    
        {/* end of protected route */}
         <Route
          path="/*"
          element={
            <div className="engNum text-md-center bg-dark text-light">
              <h1>
                404
                <hr /> this page is not exist!
              </h1>
            </div>
          }
        />
      </Routes> 
      
    
    </>
  )
}

export default Main

/* <Router>
        {localStorage.getItem('username')?(<Layout>       
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
      <Route path="/khodnegar" element={<Khodnegar/>} />
      <Route path="/profile" element={localStorage.getItem('username')  ? (<Profile/>) : (<Login />)} />
      <Route path="/rokhnegar" element={localStorage.getItem('username')  ? (<Rokhnegar/>) : (<Login/>)} />     
      <Route path="/generate" element={localStorage.getItem('username')  ? (<LicenseGenerate/>) : (<Login />)} />      
      <Route path="/calculate" element={localStorage.getItem('username')  ? (<Calculate/>) : (<Login />)} />      
      <Route path="/details" element={localStorage.getItem('username')  ? (<Progress/>) : (<Login />)} />      
          
        </Routes>
        </Layout>):
        (<Routes>
           <Route  path="/signup" element={<Signup />} /> 
           <Route  path="/signin" element={<Login />} /> 
      <Route path="/*" element={<Login/>} />
        </Routes>)}
      </Router> */
