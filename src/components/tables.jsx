/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import MyAxios from './myAxios';
import { Credit_type, Product_type } from './constants';


export default function Tables({ url ,product_type }) {
  //define state of paging
  const [page , setPage]= useState(0);
  const [limit ,setLimit] = useState(5);
  const [order , setOrder] = useState('')
// define state for filter box
const [creditTypeFilter , setCreditTypeFilter]= useState([]);
const [statusFilter , setStatusFilter]= useState([]);
const [descriptionFilter , setDescriptionFilter]= useState(null);
const[checkCreditType ,setCheckCreditType]  = useState(
  new Array(4).fill(false)
);
const[checkStatus ,setCheckStatus]  = useState(
  new Array(3).fill(false)
);

// define the state of table
  const [rowsdata, setRowsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //define the filter box function 


  //  define function of multi select menu
  function handleClickFilterCredit(e){
    e.stopPropagation()       
    document.querySelector('#status').classList.remove('show')
    document.querySelector('#credit').classList.toggle('show')
    // document.querySelector('.down-arrow').classList.toggle('.rotate180')   
}

function handleClickFilterStatus(e){  
  e.stopPropagation()     
    document.querySelector('#credit').classList.remove('show')
    document.querySelector('#status').classList.toggle('show')
    // document.querySelector('.down-arrow').classList.toggle('.rotate180')   
}
function handleClickFilterDescription(e){   
  
  if( e.target.parentElement.className !== 'task'){
    if(document.querySelector('#credit').classList.contains('show') || document.querySelector('#status').classList.contains('show') ){
      document.querySelector('#credit').classList.remove('show');
      document.querySelector('#status').classList.remove('show');
    }    
  }
 
    
    // document.querySelector('.down-arrow').classList.toggle('.rotate180')   
}


// function for value of input filter credit
function handleValueCredit(){
  if(creditTypeFilter.length !== 0){
    const result=[];
  ["یک هفته" , " دوهفته" , " یک ماه"," دائمی"].map((val ,index) =>{
    if (creditTypeFilter.includes(index + 1)) result.push(val);
  })
   console.log('result handle value ' ,result);
   return result;    
  }else{
    return [`نوع مجوز`]
  } 
}


// function for value of input filter status
function handleValueStatus(){
  if(statusFilter.length !== 0){
    const result=[];
  ['معتبر' ,  "در حال اتمام" , " نامعتبر"].map((val ,index) =>{
    if (statusFilter.includes(index + 1)) result.push(val);
  })
   console.log('result handle value ' ,result);
   return result;    
  }else{
    return [`نوع وضعیت`];
  } 
}


// handle change functions 

function handleChangeCredit(position){
console.log("handleCreditChange")
const updateCreditChecked = checkCreditType.map((item ,index)=>
index === position ? !item:item);
setCheckCreditType(updateCreditChecked);
const credits=[];
updateCreditChecked.map((val ,index)=>{
if(val === true ) credits.push(index+1);

});
setCreditTypeFilter(credits)
};

function handleChangeOrder(e){
  setOrder(e.target.value);
}

function handleChangeStatus(position){
console.log("status handle Change")
const updateStatusChecked = checkStatus.map((item ,index)=>
index === position ? !item:item);
setCheckStatus(updateStatusChecked);
const statuses=[];
updateStatusChecked.map((val ,index)=>{
if(val === true ) statuses.push(index+1);
});
setStatusFilter(statuses)
};

function handleChangeDescription(e){
setDescriptionFilter(e.target.value);
console.log("description " , descriptionFilter)
}

async function handleClickSubmit(e){
e.preventDefault();
const data={
      "creditType": creditTypeFilter,
      "status" : statusFilter,
      "description": descriptionFilter,
      "productType": product_type
      // "creditType": 1,
      // "status" : 1,
      // "description": "",
      // "productType": null
}
const result =  await MyAxios(`license/filteredLicense?offset=${page}&&limit=${limit}&&order=${order}` , "post" , data )
.then((result) =>{
  if(result.data.data.length !== 0) setRowsData(result.data.data);
  else setRowsData([]);
  console.log("result " , result.data.data);
  // if(result.success=== true && m)
}).catch((err) =>console.log(err.message));
// console.log("result " , result.data.data);
// if(result.success=== true && message=)
// setRowsData(result.data.data);


}






  // define the table  function 
  function getRandomString(length) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var result = ''
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      )
    }
    return result
  }

  useEffect(() => {
    async function getData(){
      const result =await MyAxios(url)
      .then((response) => {
        setRowsData(response.data)
      })
      .catch((err) => console.log('err', err));
      console.log("result in getData ", result);
    }
   getData();
  }, [])




  function handleStatus(expire_date) {
    let date1 = new Date(expire_date)
    let date2 = new Date()
    const dif = (date1 - date2) / (1000 * 3600 * 24)
    if (dif >= 0 && dif <= 3) return 'در حال اتمام'
    else if (dif > 3) return 'معتبر'
    else return 'نا معتبر'
  }
  function handleStatusColor(status) {
    if (status === 'در حال اتمام') return ' badge p-2 badge-warning'
    if (status === 'معتبر') return ' badge p-2 badge-success'
    if (status === 'نا معتبر') return 'badge p-2 badge-danger'
  }



  function handleRows(rows) {
    var row = rows.filter((x) => {
      return x.id >= (currentPage - 1) * 10 && x.id <= currentPage * 10
    })
    return row
  }
 console.log('creditType ' , creditTypeFilter);
 console.log('status ' , statusFilter);
  console.log('rows', rowsdata);

  return (
    <>
      <section>
        <div class="container-fluid">
          <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-8 mr-auto">
              <div class="row filter-position">
              {/* filter box */}
<div className='col-lg-12 mb-10 mb-lg-0'>
<h3 class="text-muted text-center mb-3">مجوزها </h3>
<div className="container-fluid bg-dark text-white py-3
        filter">
       <h5>فیلتر</h5>
       <div className="row" onClick={(e)=>handleClickFilterDescription(e)}>

       <div className="col-md-6 col-lg-3 py-3">
       <div class="multi-selector">
       <div class="select-field" onClick={(e)=>handleClickFilterCredit(e)}>
         <input
           type="text"
           name=""
           placeholder=""
           id=""
           class="input-selector"
           value={handleValueCredit()}
         />
         <span class="down-arrow"></span>
       </div>
       {/* <!-- list of checkboxes and options --> */}
 
       <div class="list" id="credit">
       {["یک هفته ای "  , " دوهفته ای  " , " یک ماهه" , " دائمی"].map((val ,index)=>{
         return(
          <label key={index} for={`credit-checkbox-${index}`} class="task">
           <input
            type="checkbox" 
            name={val} 
            id={`credit-checkbox-${index}`} 
            Checked={checkCreditType[index]} 
            onChange={()=>handleChangeCredit(index)}
            
            />
           <span className="px-1">{val}</span>          
         </label>)
       })  
       
       }        
       </div>
     </div>
       </div>
       <div className="col-md-6 col-lg-3 py-3 ">
       <div class="multi-selector">
       <div class="select-field"  onClick={(e)=>handleClickFilterStatus(e)}>
         <input         
           type="text"
           name=""
           placeholder="وضعیت"
           id="credit"
           class="input-selector select"
           value={handleValueStatus()}
         />
         <span class="down-arrow"></span>
       </div>
       {/* <!-- list of checkboxes and options --> */}
 
       <div class="list" id="status">
       {
         ["معتبر", " درحال اتمام" , " نامعتبر"].map((val ,index)=>{
           return(
            <label for={`status-checkbox-${index}`} class="task">
           <input type="checkbox" name={val} id={`status-checkbox-${index}`} Checked={checkStatus[index]} onChange={ ()=>handleChangeStatus(index)}  />
           <span className="px-1">{val}</span>
          
         </label>)
         })
       } 
        
        
       </div>
     </div>
       </div>

       <div className="col-md-6 col-lg-3 py-3">
       <div className="select multi-selector select-field">
       <input  
                  
                  type="text"
                  name="description"
                  placeholder="توضیحات"
                  value={descriptionFilter}
                  onChange={(e)=>handleChangeDescription(e)}
                  id="description"
                  class="input-selector"
                />
       </div>

       
       </div>

      <div className="col-md-6 col-lg-3 text-center py-3">
    
        <select  className='form-select form-select-sm'
         aria-label='form-select-sm example'
         onChange={(e)=>handleChangeOrder(e)}
         >
        <option selected value="" >مرتب سازی بر اساس ...</option>
        
        <option value="credit_type" >نوع مجوز</option>
        
        <option value="expire_date" >وضعیعت</option>
        
          
        </select>
      </div>
      <div className="col-md-6 col-lg-3 text-center py-3">
        <button onClick={(e)=>handleClickSubmit(e)} className='btn btn-primary px-5 btn-lg '>اعمال</button>
      </div>

       </div>
      
       
       </div>
</div>
             {/* table of data */}
                <div class="col-lg-12 mb-10 mb-lg-0">
                  
                  <table class="table table-dark table-striped table-hover text-center rounded-top-20 text">
                    <thead class="rounded-top">
                      <tr>
                        <th>#</th>
                        <th> نام محصول </th>
                        <th>نوع مجوز</th>
                        <th>
                         دوربین</th>
                        <th>توضیحات</th>
                        <th>پایان اعتبار</th>
                        <th>وضعیت</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rowsdata.length ? (rowsdata.map((credit, index) => {
                        console.log("rowsdata map " , credit);
                        const status_credit = handleStatus(credit.expire_date)
                        let id_string_unit = getRandomString(5)

                        return (
                          <>
                            <tr>
                              <td>
                                <button
                                  class="btn btn-info btn-sm p-3"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target={'#' + status_credit}
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  {index + 1}
                                </button>
                              </td>
                              <td>{Product_type[credit.product_type]}</td>
                              <td>{Credit_type[credit.credit_type]}</td>
                              <td>{credit.camera_count}</td>
                              <td>{credit.description}</td>
                              <td>{credit.expire_date}</td>
                              <td>
                                <span
                                  className={handleStatusColor(status_credit)}
                                >
                                  {status_credit}
                                </span>
                              </td>
                            </tr>

                            <tr class="collapse" id={status_credit}>
                              <td>کلید دوربین</td>
                              <td colspan={6}>
                                <span class="text engNum">{credit.user_key} </span>
                              </td>
                            </tr>
                            <tr class="collapse" id={id_string_unit}>
                              <td>کلید مجوز</td>
                              <td colspan={6}>
                                <span class="text engNum"> {credit.license_code}</span>
                              </td>
                            </tr>
                          </>
                        )
                      })):[1].map(()=>{
                        return (
                          <tr>
                            <td colSpan={7}><span>هیچ موردی یافت نشد</span></td>
                          </tr>
                        )
                      })
                      
                       }
                    </tbody>
                  </table>
                  {/* <!-- pagination  --> */}

                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a
                        href="#"
                        onClick={() => setCurrentPage(currentPage + 3)}
                        class="page-link py-2 px-3"
                        
                      >
                        &laquo;
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        href="#"
                        onClick={() => setCurrentPage(currentPage + 2)}
                        class="page-link py-2 px-3"
                      >
                        {currentPage + 2}
                      </a>
                    </li>
                    <li class="page-item ">
                      <a
                        href="#"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        class="page-link py-2 px-3"
                      >
                        {currentPage + 1}
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link py-2 px-3">
                        {currentPage}
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        href="#"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        class="page-link py-2 px-3"
                      >
                        &raquo;
                      </a>
                    </li>
                  </ul>
                  {/* <!-- end of pagination  --> */}
                </div>

                {/* <!-- pagination  --> */}
                {/* <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a href="" class="page-link py-2 px-3">&laquo;</a>
                  </li>
                  <li class="page-item">
                    <a href="" class="page-link py-2 px-3">3</a>
                  </li>
                  <li class="page-item">
                    <a href="" class="page-link py-2 px-3">2</a>
                  </li>
                  <li class="page-item active">
                    <a href="" class="page-link py-2 px-3">1</a>
                  </li>
                  <li class="page-item">
                    <a href="" class="page-link py-2 px-3">&raquo;</a>
                  </li>
                </ul>
                {/* <!-- end of pagination  --> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
