import React from 'react'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'

export default function Navbar() {
  
  function handleClickLogout(e) {
    localStorage.removeItem('token');
  //  <Navigate replace to ="/"/>
   window.location.reload();
    
  }

  const url = window.location.href
  console.log('url', url)
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light">
        <button
          class="navbar-toggler mb-2 bg-light "
          data-toggle="collapse"
          data-target="#mynav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="mynav">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top ">
                <a
                  href="hamed.com"
                  class="navbar-brand text-white d-block text-center mx-auto py-3 mb-4 bottom-border"
                >
                  دیتامون
                </a>
                <div class="bottom-border pb-3">
                  <img
                    src="./images/Datamoon.png"
                    class="rounded-squared ml-5"
                    style={{ width: '200px' }}
                    alt=""
                  />
                  {/* <a class="text-white" href="hamed.com">
                    دیتامون
                  </a> */}
                </div>
                <ul class="nav-bar list-unstyled flex-column mt-4">
                  <li class="nav-item" id="dashboard">
                    <a href="/" class="nav-link text-white p-3 mb-2 ">
                   
                    
                      <i class="fas fa-home fa-lg ml-3"></i>داشبورد
                    

                    </a>
                  </li>
                  <li class="nav-item sidebar-link" id="khodnegar">
                    <a href="/khodnegar" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-car fa-lg ml-3"></i>خود نگار
                    </a>
                  </li>
                  <li class="nav-item sidebar-link" id="rokhnegar">
                    <a href="/rokhnegar" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-user-secret fa-lg ml-3"></i>رخ نگار
                    </a>
                  </li>
                  <li class="nav-item sidebar-link" id="profile">
                    <a href="/profile" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-user fa-lg ml-3"></i>پروفایل
                    </a>
                  </li>
                  <li class="nav-item sidebar-link" id="profile">
                    <a href="/calculate" class="nav-link text-white p-3 mb-2 ">
                      <i class="fa fa-calculator fa-lg ml-3"></i>راهنمای
                      پردازنده
                    </a>
                  </li>
                  {/* <li class="nav-item sidebar-link">
                    <a href="hamed.com" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-chart-line fa-lg ml-3"></i>تحلیل
                    </a>
                  </li>
                  <li class="nav-item sidebar-link">
                    <a href="hamed.com" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-chart-bar fa-lg ml-3"></i>نمودار ها
                    </a>
                  </li>
                  <li class="nav-item sidebar-link">
                    <a href="hamed.com" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-table fa-lg ml-3"></i> جدول ها
                    </a>
                  </li>
                  <li class="nav-item sidebar-link">
                    <a href="hamed.com" class="nav-link text-white p-3 mb-2 ">
                      <i class="fas fa-wrench fa-lg ml-3"></i> تنظیمات
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* topbar */}
              <div class="col-xl-10 col-lg-9 col-md-8 bg-dark mr-auto fixed-top py-2 top-navbar">
                <div class="row">
                  <div class="col-md-4">
                    <h4 class="text-light ">داشبورد</h4>
                  </div>
                  <div class="col-md-5">
                    <form class="my-4 my-md-0" action="">
                      <div class="input-group">
                        <button class="btn btn-white search-button">
                          <i class="fas fa-search text-danger"></i>
                        </button>
                        <input
                          type="text"
                          placeholder="جستجو ..."
                          class="form-control search-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="col-md-3">
                    <ul class="navbar-nav flex-row justify-content-between">
                      <li class="nav-item">
                        <a href="hamed.com" class="nav-link">
                          <i class="fas fa-comments fa-lg text-muted"></i>
                        </a>
                      </li>
                      <li glassName="nav-item">
                        <a href="hamed.com" class="nav-link">
                          <i class="fas fa-bell fa-lg text-muted"></i>
                        </a>
                      </li>
                      <li class="nav-item mr-md-auto">
                        <a
                          href="#logoutModal"
                          data-toggle="modal"
                          class="nav-link"
                        >
                          <i class="fas fa-sign-out-alt fa-lg text-danger"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* end of topbar */}
            </div>
          </div>
        </div>
      </nav>
      {/* modal */}
      <div class="modal fade" id="logoutModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4>آیا میخواهید خارج شوید ؟</h4>
            </div>
            <div class="modal-body">
              <p class="text-muted">
                در صورت خروج ، برای دسترسی به پنل باید مجددا وارد شوید{' '}
              </p>
            </div>

            <div class="modal-footer">
              <button class="btn btn-success" data-dismiss="modal">
                میمانم
              </button>
              <button
                class="btn btn-danger"
                onClick={(e) => handleClickLogout(e)}
              >
                خارج میشوم
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
