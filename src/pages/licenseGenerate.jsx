import React, { useEffect, useState } from 'react'
import MyAxios from './../components/myAxios'
import { useLocation } from 'react-router-dom'
import { Credit_type, Product_type } from './../components/constants'
export default function LicenseGenerate() {
  const location = useLocation()
  const [credit, setCredit] = useState('')
  const [message, setMessage] = useState('')
  const [credit_type, setCredit_type] = useState()
  const [product_type, setProduct_type] = useState()
  const [credit_user, setCreditUser] = useState([])
  const [user_key, setUser_key] = useState('')
  const [camera_Count, setCamera_count] = useState(2)
  const [discription, setDescription] = useState('')
  const [copy, setCopy] = useState('')
  const [enabledOptions, setEnableOption] = useState([1])

 async  function updateCreditTypes(productType) {
    const currentUrl = 'credit/' + productType
    console.log('currentUrl', currentUrl)

      await MyAxios(currentUrl)
      .then((res) => {
        setCreditUser(res.data);
        console.log("res data " , res.data);
        
        
        console.log('credit_user', credit_user)
        const newArr = []
        res.data.map((val, index) => {
          if (val.credit_count) {
            newArr.push(val.credit_type)
            console.log('newArr', newArr)
          }
          return true;
        })
        console.log('set enabled option', newArr)
        setEnableOption(newArr)
      })
      .catch((err) => setMessage(err))
  }

  useEffect(() => {
    var defaultProductType = 1
    if (location.state !== null) {
      console.log('location satte product ', location.state['product'])
      setProduct_type(location.state['product'])
      defaultProductType = location.state['product']
      setCredit_type(location.state['credit'])
    } else {
      setProduct_type(1)
      defaultProductType = 1
      setCredit_type(1)
    }

    console.log('use effect product type', defaultProductType)
    updateCreditTypes(defaultProductType)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function handleCopy(e) {
    e.preventDefault()
    navigator.clipboard.writeText(credit)
    setCopy('متن مجوز در کلیپ بورد ذخیره شد!  ')
  }
  function handleChangeKeyAndCamera(input) {
    const target = input.target
    console.log('target', target)
    if (input.target.name === 'camera_count') {
      if (!isNaN(parseInt(target.value, 10))) {
        setCamera_count(parseInt(target.value, 10))
        console.log('camera cont', camera_Count)
      }

      if (target.value === '') setCamera_count('')
    } else {
      if (target.name === 'discription') setDescription(target.value)
      else setUser_key(target.value)
    }
  }

  function handleChangeCreditType(event) {
    setCredit_type(event.target.value)
  }
  function handleChangeProductType(event) {
    setEnableOption([])
    setProduct_type(event.target.value)
    updateCreditTypes(event.target.value)
  }

  async function doSubmit() {
    setMessage('')
    setCopy('')
    const currentUrl = 'license/generate'
    const newCredit = {
      credit_type: parseInt(credit_type),
      user_key: user_key,
      product_type: parseInt(product_type),
      description: discription,
      camera_count: camera_Count,
    }
    console.log('new credit', newCredit)
    const response = await MyAxios(currentUrl, 'post', newCredit)

    if (response.data.success) {
    
      setCredit(response.data['license']);
    } else {
      setMessage(response.data.error_message)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    doSubmit()
  }
  console.log('product_type', product_type)
  console.log('enable option', enabledOptions)
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
                      <h3 class="text-muted text-center  mb-3">
                        {' '}
                        دریافت مجوز{' '}
                      </h3>
                    </div>
                    <div class="container" id="generate_license">
                      {/* form */}
                      <form>
                        <div className="form-group-inline">
                          <label class="bold mt-2" for="product_type">
                            نوع محصول
                          </label>
                          {['khodnegar', 'rokhnegar'].map((option, index) => (
                            <div
                              key={index}
                              class="form-check form-check-inline"
                            >
                              <input
                                class="form-check-input"
                                type="radio"
                                name="product_type"
                                id={option}
                                value={index + 1}
                                checked={index + 1 === parseInt(product_type)}
                                onChange={(e) => handleChangeProductType(e)}
                              />
                              {console.log('product type', product_type)}
                              {console.log('index + 1 = ', index + 1)}
                              <label class="form-check-label m-3" for={option}>
                                {Product_type[index + 1]}
                              </label>
                            </div>
                          ))}
                        </div>
                        <hr />
                        <div class="form-group  my-2">
                          <label for="camera_count " class="bold">
                            تعداد دوربین
                          </label>
                          <input
                            type="text"
                            name="camera_count"
                            id="camara_count"
                            class="form-control"
                            placeholder="تعداد دوربین"
                            aria-describedby="helpId"
                            value={camera_Count}
                            onChange={(e) => handleChangeKeyAndCamera(e)}
                          />
                        </div>
                        <hr />
                        <div class="form-group  my-2">
                          <label for="discription " class="bold">
                            توضیحات
                          </label>
                          <textarea
                            name="discription"
                            id="discription"
                            class="form-control"
                            placeholder="توضیحات"
                            aria-describedby="helpId"
                            value={discription}
                            onChange={(e) => handleChangeKeyAndCamera(e)}
                          />
                        </div>
                        <hr />
                        <div class="form-group  my-2">
                          <label for="user_key " class="bold">
                            کلید دوربین
                          </label>
                          <textarea
                            name="user_key"
                            id="user_key"
                            class="form-control engNum"
                            placeholder="کلید دوربین"
                            aria-describedby="helpId"
                            value={user_key}
                            onChange={(e) => handleChangeKeyAndCamera(e)}
                          />
                        </div>
                        <hr />
                        <div class="form-group  my-2">
                          <label for="credit_type " class="bold">
                            نوع مجوز
                          </label>
                          <br />
                          {[
                            'one_week',
                            'two_weeks',
                            'one_month',
                            'permanent',
                          ].map((option, index) => (
                            <div
                              key={index}
                              class="form-check form-check-inline "
                            >
                              <input
                                class="form-check-input"
                                type="radio"
                                name={option}
                                id={option}
                                value={index + 1}
                                checked={index + 1 === parseInt(credit_type)}
                                disabled={
                                  // eslint-disable-next-line eqeqeq
                                  enabledOptions.filter((x) => parseInt(x) === index + 1)
                                    .length === 0
                                }
                                onChange={(e) => handleChangeCreditType(e)}
                              />
                              <label class="form-check-label m-3" for={option}>
                                {Credit_type[index + 1]}
                              </label>
                            </div>
                          ))}
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-large m-1 btn-block px-3"
                          onClick={(e) => handleSubmit(e)}
                        >
                          ایجاد
                        </button>
                        <hr />
                        {credit && (
                          <>
                            {' '}
                            <div class="form-group  my-2">
                              <label for="credit_key " class="bold">
                                کلید مجوز
                              </label>
                              <textarea
                                name="credit_key"
                                id="credit_key"
                                class="form-control engNum"
                                placeholder="کلید مجوز"
                                aria-describedby="helpId"
                                value={credit}
                              />
                            </div>
                            <button
                              class="btn btn-primary btn-large m-1  px-3"
                              onClick={(e) => handleCopy(e)}
                            >
                              کپی
                            </button>
                          </>
                        )}
                        {copy !== '' && (
                          <>
                            {' '}
                            <div class="alert alert-success" role="alert">
                              {copy}
                            </div>
                          </>
                        )}
                        {message !== '' && (
                          <div class="alert alert-danger" role="alert">
                            {message}
                          </div>
                        )}
                      </form>
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
