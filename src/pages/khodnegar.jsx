import {useState , useEffect} from 'react'
import Tables from '../components/tables'
import Cards from './../components/cards'
import Charts from '../components/charts'
import MyAxios from '../components/myAxios';
export default function Khodnegar() {
  // const [piData, setPiData] = useState([0,0,0]);
  // const [barData, setBarData] = useState([[0,0,0],[0,0,0],[0,0,0],[0,0,0]]);
  // useEffect(() => {
  
  //     async function getDataCharts() {
  //        await MyAxios("license/chartLicenseUser/1")
  //       .then((result)=>{
  //         setPiData(result.data.data.piData);      
  //       setBarData(result.data.data.barData);
  //       })
        
  //     };
  //     getDataCharts();
  //   }, []);
  // console.log('piDAta ', piData)
  return (
    <>
      <Cards url={'credit/1'} product_type={1} />
      <Charts
       url={"license/chartLicenseUser/1"}
       product_type={1}     
        />
      <Tables url={'license/1'} product_type={1} />
    </>
  )
}
