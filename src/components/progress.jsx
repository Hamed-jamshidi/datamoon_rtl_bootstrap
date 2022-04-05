/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Progress() {
  
  return (
    <>
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-10 col-lg-9 col-md-8 mr-auto">
              <div class="row pt-md-5 mt-md-2 mb-5">
                {/* <!-- progress  --> */}
                <div class="col-lg-6">
                  <div class="bg-dark text-white p-4 rounded">
                    <h4 class="mb-4">پروژه ها</h4>
                    {/* <!-- project  --> */}
                    <h6 class="mb-2 mt-4">کتابخانه آنلاین</h6>
                    <div class="progress" style={{ height: '20px' }}>
                      <div
                        class="progress-bar progress-bar-striped font-weight-bold bg-danger"
                        style={{ width: '85%' }}
                      >
                        85%
                      </div>
                    </div>
                    {/* <!-- end of project  -->
                  <!-- project  --> */}
                    <h6 class="mb-2 mt-4">اپلیکیشن نئون</h6>
                    <div class="progress" style={{ height: '20px' }}>
                      <div
                        class="progress-bar progress-bar-striped font-weight-bold bg-primary"
                        style={{ width: '23%' }}
                      >
                        23%
                      </div>
                    </div>
                    {/* <!-- end of project  -->
                  <!-- project  --> */}
                    <h6 class="mb-2 mt-4">وب سرویس</h6>
                    <div class="progress" style={{ height: '20px' }}>
                      <div
                        class="progress-bar progress-bar-striped font-weight-bold bg-success"
                        style={{ width: '55%' }}
                      >
                        55%
                      </div>
                    </div>
                    {/* <!-- end of project  --> */}
                  </div>
                </div>
                {/* <!-- end of progress  -->
              <!-- chart  --> */}
                {/* <div class="col-lg-6">
                  <h4 class="text-muted p-3 mb-3">نمودار</h4>
                  <table className="charts-css area" id="my-Chart">
                    <tbody>
                      <tr>
                        <td style={{}}>
                          <span className="data">$ 80k</span>
                        </td>
                        <td style={{}}>
                          <span className="data">$ 80k</span>
                        </td>
                        <td style={{}}>
                          <span className="data">$ 80k</span>
                        </td>
                        <td style={{}}>
                          <span className="data">$ 80k</span>
                        </td>
                        <td style={{}}>
                          <span className="data">$ 80k</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}



                <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row">
            <div class="container-fluid d-flex justify-content-center">
                <div class="col-sm-8 col-md-6">
                    <div class="card">
                        <div class="card-header">Pie chart</div>
                        <div class="card-body" >
                            <div class="chartjs-size-monitor" >
                                <div class="chartjs-size-monitor-expand" >
                                    <div ></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink" >
                                    <div ></div>
                                </div>
                            </div> <canvas id="chart-line" width="299" height="200" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





                {/* <!-- end of chart  --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
