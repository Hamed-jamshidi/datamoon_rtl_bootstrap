import React ,{useState}from 'react';

const Filter = () => {
  // define state
   const [creditTypeFilter , setCreditTypeFilter]= useState([]);
   const [statusFilter , setStatusFilter]= useState([]);
   const [descriptionFilter , setDescriptionFilter]= useState(null);
   const[checkCreditType ,setCheckCreditType]  = useState(
     new Array(4).fill(false)
   );
   const[checkStatus ,setCheckStatus]  = useState(
     new Array(3).fill(false)
   );
 
  //  define function of multi select menu
    function handleClickFilterCredit(){       
            document.querySelector('#status').classList.remove('show')
            document.querySelector('#credit').classList.toggle('show')
            // document.querySelector('.down-arrow').classList.toggle('.rotate180')   
    }
    
    function handleClickFilterStatus(){       
            document.querySelector('#credit').classList.remove('show')
            document.querySelector('#status').classList.toggle('show')
            // document.querySelector('.down-arrow').classList.toggle('.rotate180')   
    }
    function handleClickFilterDescription(){       
            document.querySelector('#credit').classList.remove('show')
            document.querySelector('#status').classList.remove('show')
            // document.querySelector('.down-arrow').classList.toggle('.rotate180')   
    }

// handle change functions 

    function handleChangeCredit(position){
      console.log("handleCreditChange")
     const updateCreditChecked = checkCreditType.map((item ,index)=>
     index === position ? !item:item);
  setCheckCreditType(updateCreditChecked);
  const credits=[];
  const creditType = updateCreditChecked.map((val ,index)=>{
  if(val === true ) credits.push(index+1);
  return credits ;
  });
  setCreditTypeFilter(creditType)
    };
  


    function handleChangeStatus(position){
      console.log("status handle Change")
     const updateStatusChecked = checkStatus.map((item ,index)=>
     index === position ? !item:item);
  setCheckStatus(updateStatusChecked);
  const statuses=[];
  const status = updateStatusChecked.map((val ,index)=>{
  if(val === true ) statuses.push(index+1);
  return statuses ;
  });
  setStatusFilter(status)
    };

    function handleChangeDescription(e){
      setDescriptionFilter(e.target.value);
      console.log("description " , descriptionFilter)
    }

    function handleClickSubmit(e){
       e.preventDefault();

    }
    
  
   
    return (
       <> 

       <div className="container-fluid bg-dark text-white py-3
        filter">
       <h5>فیلتر</h5>
       <div className="row">

       <div className="col-sm-6 col-lg-3 py-3">
       <div class="multi-selector">
       <div class="select-field" onClick={handleClickFilterCredit}>
         <input
           type="text"
           name=""
           placeholder="نوع مجوز"
           id=""
           class="input-selector"
         />
         <span class="down-arrow"></span>
       </div>
       {/* <!-- list of checkboxes and options --> */}
 
       <div class="list" id="credit">
       {["یک هفته ای "  , " دوهفته ای  " , " یک ماهه" , " دائمی"].map((val ,index)=>{
         return(
          <label key={index} for={`credit-checkbox-${index}`} class="task">
           <input type="checkbox" name={val} id={`credit-checkbox-${index}`} Checked={checkCreditType[index]} onChange={()=>handleChangeCredit(index)}/>
           <span className="px-1">{val}</span>
          
         </label>
         )
  
       })
       
       
       }
        
       </div>
     </div>
       </div>

       <div className="col-sm-6 col-lg-3 py-3 ">
       <div class="multi-selector">
       <div class="select-field"  onClick={handleClickFilterStatus}>
         <input         
           type="text"
           name=""
           placeholder="وضعیت"
           id="credit"
           class="input-selector select"
           value="وضعیت"
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

       <div className="col-sm-6 col-lg-3 py-3">
       <div onClick={handleClickFilterDescription} className="select multi-selector select-field">
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

      <div className="col-sm-6 col-lg-3 text-center py-3">
        <button onClick={(e)=>handleClickSubmit(e)} className='btn btn-primary px-5 btn-lg '>اعمال</button>
      </div>

       </div>
      
       
       </div>
       
       
       
   
     
 
     </>
    );
}

export default Filter;
