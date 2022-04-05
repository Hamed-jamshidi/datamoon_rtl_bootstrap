import React from 'react';

export default function Dashboard() {
  console.log('dashboard body dir' , document.body.dir);
  
  function handleClick(path) {
    window.location.replace(path)
  }
  return (
    <section>
      <div class="container-fluid">
        <div class="row justify-content-between ">
          <div class="col-xl-10 col-lg-9 col-md-8 text-center  mr-auto ">
            <img
              src="./images/hero_datamoon_new14.png"
              class=" pt-md-5 mt-md-2 mb-5"
              alt="دیتامون"
              width="500px"
              height="250px"
            />
          </div>
        </div>
        <div class="row mr-auto justify-content-sm-end text-center">
          <div class="col-sm-10 col-lg-5 mr-auto mt-2 ">
            <img
              src="./images/Khodnegar.jpg"
              class=""
              alt="خود نگار"
              width="500px"
              height="300px"
              onClick={() => handleClick('khodnegar')}
            />
          </div>
          <div class="col-sm-10 col-lg-5  mt-2">
            <img
              src="./images/Rokhnegar.jpg"
              class=""
              alt="رخ نگار"
              width="500px"
              height="300px"
              onClick={() => handleClick('rokhnegar')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
