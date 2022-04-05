import React, { useState } from 'react'
import MyAxios from '../components/myAxios'
import * as yup from 'yup'

import { useTranslation } from 'react-i18next';



export default function Profile() {
  const {t , i18n} = useTranslation();
  console.log('document body dir ', document.body.dir);
  document.body.dir = i18n.dir();
  console.log('document body dir after change ', document.body.dir)
  // const {i18n} = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");

  const changLanguage = (event)=>{
    console.log("changlange functoin ")
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }
  const [currentPassword, setCurrentPassword] = useState(
    localStorage.getItem('password'),
  )
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [errors, setError] = useState([])

  const handleClick = async (event) => {
    console.log('handleclick1')
    event.preventDefault()
    if (newPassword === confirmPassword) {
      console.log('handleclick2')
      setError([]);
      doSubmit()
    } else {
      setError(['رمز جدید با تکرار آن یکسان نیست!'])
      console.log('else sentense dosubmit')
    }
  }

  const schema = yup.object().shape({
    newPassword: yup.string().min(8, 'رمز جدید حداقل باید 8 حرف باشد!'),
  })

  const validate = async () => {
    try {
      const result = await schema.validate(
        { newPassword },
        { abortEarly: false },
      )
      return result
    } catch (error) {
      setError(error.errors)
    }
  }
  const doSubmit = async () => {
    setSuccess(false);
    setError([]);
    setMessage('');
    console.log('handleclick3')
    const result = await validate()
    const changeData = {
      current_password: currentPassword,
      new_password: result.newPassword,
    }
    console.log('change data',changeData)
    console.log('errors' , errors)
    if (true) {
      const currentUrl = 'user/password'
      const response = await MyAxios(currentUrl, 'post', changeData)
      console.log('response ', response)
      if (response.data.success === false) {
        setMessage(response.data.error_message)
      } else {
        setSuccess(response.data.success)
        setMessage('پسورد شما با موفقیت تغییر یافت!');
        setTimeout(() => {
          localStorage.removeItem('username')
          localStorage.removeItem('password')
          window.location.replace('/')
        }, 3000);
      }
    }
  }
  return (
    <>
      <section>
        <div class="container-fluid">
          <div class="row ">
            <div class="col-xl-10 col-lg-9 col-md-8 mr-auto ">
              <div class="row pt-md-5 mt-md-2 mb-5 my-5 justify-content-center ">
                <div class="col-md-6 col-sm-12 p-2 text-right">
                  {/* card  */}
                  <div class="card">
                    <div class="card-header">
                      <h3 class="text-muted text-center  mb-3"> تغییر رمز </h3>
                    </div>
                    <div class="container" id="change_password">
                      {/* form */}
                      <form>
                        {console.log('errors', errors)}
                        {errors.length !== 0 &&
                          (errors.map((error, index) => (
                            <div
                              key={index}
                              class="alert alert-danger"
                              role="alert"
                            >
                              {error}
                            </div>
                          )))}
                        {message !== '' &&
                          (success ? (
                            <div class="alert alert-success" role="alert">
                              {message}
                            </div>
                          ) : (
                            <div class="alert alert-danger" role="alert">
                              {message}
                            </div>
                          ))}
                        <div class="form-group  my-2">
                          <label for="camera_count " class="bold">
                            رمز فعلی
                          </label>
                          <input
                            type="password"
                            name="current_password"
                            id="current_password"
                            class="form-control"
                            placeholder="رمز فعلی"
                            aria-describedby="helpId"
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            value={currentPassword}
                          />
                        </div>
                        <hr />
                        <div class="form-group  my-2">
                          <label for="discription " class="bold">
                            رمز جدید
                          </label>
                          <input
                            type="password"
                            name="new_password"
                            id="new_password"
                            class="form-control"
                            placeholder="رمز جدید"
                            aria-describedby="helpId"
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                          />
                        </div>
                        <hr />
                        <div class="form-group  my-2">
                          <label for="user_key " class="bold">
                            تکرار رمز{' '}
                            {/* {t('CONFIRM_PASSWORD')} */}
                          </label>
                          <input
                            type="password"
                            name="repeat_password"
                            id="repeat_password"
                            class="form-control"
                            placeholder="تکرار رمز"
                            aria-describedby="helpId"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary btn-large m-1 btn-block px-3"
                          onClick={(e) => handleClick(e)}
                        >
                          ایجاد
                        </button>


                        
                      </form>
                      <div onChange={changLanguage}>
                      <label ><input type="radio" value="en" name="language" checked={selectedLang === "en"}/>English</label>
                      <label ><input type="radio" value="fa" name="language" checked={selectedLang === "fa"}/>farsi</label>
                                              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
