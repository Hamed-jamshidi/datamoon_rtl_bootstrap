import React, { useEffect, useState } from 'react'
import MyAxios from './myAxios'
import { CreditData, Credit_type, Product_type } from './constants.jsx'
import { useNavigate } from 'react-router-dom'
export default function Cards({ url, product_type }) {
  const navigate = useNavigate()
  const [credit_user, setCredit_user] = useState([])
  function handleVisible(credit) {
    if (credit.credit_count > 0) return true
  }
  useEffect( () => {
    console.log('card url', url)
    async function getData(){
      await MyAxios(url, 'get')
      .then((res) => {
        setCredit_user(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
     
    }
    getData();
   
      
  }, [url])
  function handleClick(productType, creditType) {
    const url = 'http://' + window.location.hostname + '/generate'

    console.log('click', productType, creditType, window.location.hostname, url)
    navigate('/generate', {
      state: { product: productType, credit: creditType },
    })
  }

  return (
    <>
      <section>
        <div class="container-fluid">
          <div class="row p-2">
            <div class="col-xl-10 col-lg-9 col-md-8  mr-auto ">
              <div class="row pt-md-5 mt-md-2 mb-5">
                {CreditData.map((val, index) => {
                  var user_credit = null
                  let visible = false

                  var isCredit = credit_user.filter(
                    (item) => item.credit_type === val.credit_type,
                  )

                  if (isCredit.length) {
                    user_credit = isCredit[0]
                    const credit_date = new Date(user_credit['expire_date'])

                    user_credit['expire_date'] =
                      credit_date.getFullYear() +
                      '-' +
                      (credit_date.getMonth() + 1) +
                      '-' +
                      credit_date.getDate()
                    visible = handleVisible(user_credit)
                  } else {
                    user_credit = val
                    user_credit['product_type'] = 1
                  }
                  return (
                    <>
                      {/* card */}
                      <div class="col-lg-3 col-md-6 p-2">
                        <div class="card card-common ">
                          <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="text-secondary">
                                <h5>نام محصول</h5>
                              </div>
                              <h5>{Product_type[product_type]}</h5>
                              {console.log('product type ', product_type)}
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="text-secondary">
                                <h5> نام مجوز</h5>
                              </div>
                              <h5>{Credit_type[user_credit['credit_type']]}</h5>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="text-secondary">
                                <h5>تعداد دوربین</h5>
                              </div>
                              <h5>{user_credit['credit_count']}</h5>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between ">
                              <div class="text-secondary">
                                <h5>حداکثر دوربین</h5>
                              </div>
                              <h5>{user_credit['maximum_camera_count']}</h5>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="text-secondary">
                                <h5>پایان اعتبار</h5>
                              </div>
                              <h5>{user_credit['expire_date']}</h5>
                            </div>
                            <hr />
                          </div>
                          <div class="card-footer text-secondary text-center ">
                            {visible ? (
                              <button
                                class="btn btn-info btn-big px-5 "
                                onClick={(e) =>
                                  handleClick(
                                    product_type,
                                    user_credit['credit_type'],
                                  )
                                }
                              >
                                ایجاد
                              </button>
                            ) : (
                              <h5>این مجوز برای شما فعال نیست!</h5>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
