import React, { useContext, useState } from 'react'
import MyAxios from '../components/myAxios'
// import { UserContext } from '../context/context';

export default function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  // const [token, setToken]=useContext(UserContext);
  const doSubmit = async () => {
    var currentUrl = 'auth/login';
    // var currentUrl = 'user/signin'
    // const login = { username: username, password: password }
    const login = { username: username, password: password };
    console.log('login data' , login);
    const response = await MyAxios(currentUrl, 'post', login);
   
    if (response.data.data.success) {  
      localStorage.removeItem("token");
      localStorage.setItem("token",response.data.data.token  )
      window.location.replace('/');
    } else {
      setMessage('نام عبور یا رمز عبور نادرست است!')
    }
  }

  const handleUserLogin = (event) => {
    event.preventDefault();
    doSubmit();
  }
  return (
    <section class="vh-100" style={{ backgroundColor: '#eee' }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style={{ borderRadius: '25px' }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img
              alt=""
              src="./images/hero_datamoon_new14.png"
              class="img-fluid"
            />
            {/* alt="Sample image"> */}
          </div>
          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <form>
              {message !== '' && (
                <div class="alert alert-danger " role="alert">
                  {message}
                </div>
              )}
              
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <h1 >ورود</h1>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-group">
                <label for="username">نام کاربری</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="نام کاربری"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="form-group">
                <label class="form-label" for="username">
                  رمز عبور
                </label>
                <input
                  type="password"
                  id="password"
                  class="form-control "
                  placeholder="رمز عبور"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div class="form-group">
                  <label class="form-check-label p-2" for="form2Example3">
                    مرا بخاطر بسپار
                  </label>
                  <input
                    class="form-check-input mr-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                </div>
                <a href="/profile" class="text-body">
                  فراموش کردن پسورد؟
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={(e)=>handleUserLogin(e)}
                >
                  ورود
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  ثبت نام نکرده اید؟{' '}
                  <a href="/signup" class="link-danger">
                    ثبت نام
                  </a>
                </p>
              </div>
            </form>
          </div>
         
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
    </section>
  )
}
