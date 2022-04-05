import React, { useEffect, useState } from 'react'

export default function Calculate() {
  const [rokhnegarCount, setRokhnegarCount] = useState(0)
  const [khodnegarCount, setKhodnegarCount] = useState(0)
  const [power, setPower] = useState(50)
  const [data, setData] = useState([])
  const [totalPower, setTotalPower] = useState(0)

  const getData = () => {
    fetch('cpuData.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        setData(myJson.cpuData)
        console.log('data get data', myJson.cpuData)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  function handleChange(e) {
    if (e.target.name === 'rokhnegar')
      setRokhnegarCount(parseInt(e.target.value))

    if (e.target.name === 'khodnegar')
      setKhodnegarCount(parseInt(e.target.value))

    if (e.target.name === 'power') setPower(parseInt(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTotalPower((khodnegarCount * 3 + rokhnegarCount * 2) / (power / 100))
    console.log('totalPower', totalPower)
  }
  console.log('data', data)
  return (
    <section>
      <div class="container-fluid">
        <div class="row p-2">
          <div class="col-sm-10   mr-auto ">
            <div className="pt-md-5 mt-md-2 mb-5">
              <div className="card">
                <div className="card-header">پیشنهاد پردازشگر</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="khodnegar">خودنگار</label>
                            <input
                              type="number"
                              min="0"
                              name="khodnegar"
                              className="form-control"
                              placeholder="تعداد"
                              id="khodnegar"
                              value={khodnegarCount}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label for="rokhnegar">رخ نگار</label>
                            <input
                              name="rokhnegar"
                              type="number"
                              min="0"
                              className="form-control"
                              placeholder="تعداد"
                              id="rokhnegar"
                              value={rokhnegarCount}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label for="power">توان پردازش</label>
                            <input
                              name="power"
                              type="number"
                              min="0"
                              step="5"
                              max="100"
                              className="form-control"
                              placeholder="تعداد"
                              id="power"
                              value={power}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>

                          <div className="form-group col-md-6 my-auto">
                            <button
                              className="btn btn-primary btn-info btn-lg"
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                            >
                              محاسبه
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-md-6  m-2 p-2 ram-border">
                          <div className="">Lan(in / out) : 50 / 10 Mb/s</div>
                        </div>
                        <div className="col-md-6  m-2 p-2 ram-border">
                          <div className="">
                            Storage recording rate : 40.0 Mbit/s
                          </div>
                        </div>
                        <div className="col-md-6  m-2 p-2 ram-border">
                          <div className="">
                            Server Storage Configuration : (6.18 TB HDD )
                          </div>
                        </div>
                        <div className="col-md-6  m-2 p-2 ram-border">
                          <div className="">Server RAM : 2*4 GB</div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-12">
                  <div className="card">adgd</div>
                  </div> */}
                  </div>
                  <div className="row">
                    <table className="table table-striped">
                      <thead className="bg-info">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">پلتفرم پردازنده </th>
                          <th scope="col"> حجم پردازش پردازنده</th>
                          <th scope="col"> پردازش مورد نیاز مشتری</th>
                        </tr>
                      </thead>
                      <tbody>
                        {totalPower &&
                          data
                            .filter((x) => x.power >= totalPower)
                            .map((value, index) => {
                              return (
                                <tr>
                                  <th scope="row">{index}</th>
                                  <td>{value.platform}</td>
                                  <td> GHz {value.power} </td>
                                  <td>
                                    {' '}
                                    % {(totalPower / value.power).toFixed(
                                      2,
                                    )}{' '}
                                  </td>
                                </tr>
                              )
                            })}
                      </tbody>
                    </table>
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
