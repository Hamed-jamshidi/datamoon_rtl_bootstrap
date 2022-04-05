import { BrowserRouter as Router } from 'react-router-dom';
import { useContext, useState ,useEffect} from 'react';
import { UserContext } from './context/context';

import myAxios from "./components/myAxios";
import Main from './layout/main';
import Test2 from './components/test2'
function App() {
  
// useEffect(() => {
  
//   async function getDataCharts() {
//     const result = await myAxios("license/chartLicenseUser") ;
//     setChartData(result.data.data);
//     console.log('result of chart data' ,chartData);
    
//   };
//   getDataCharts();
// }, []);
// console.log('result of chart data' ,chartData);
  // return (
  //   // <Filter/>
  //     // <UserContext.Provider value={{token , setToken}}> 
  //     // <Test2 licenseValue={chartData}/>
  //     <App/>
  //     // </UserContext.Provider>
        
       
         
     
   
  // )
  return (
    <Main />
  )
}

export default App
