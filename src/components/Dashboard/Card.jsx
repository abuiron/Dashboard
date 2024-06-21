import React from 'react'

function Card({e}) {
  return <>
  
  {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className={`card border-left-${e.Color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${e.Color} text-uppercase mb-1`}>
                                        {e.Title}</div>
                                 {
                                    e.Isprogress?
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 ml-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style={{width: `${e.Value}%`, ariaValueNow :e.Value, ariaValueMin : "0",
                                                    ariaValueMax :"100"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    :<div className="h5 mb-0 font-weight-bold text-gray-800">{e.Value}</div>
                                 }
                                 </div>
                                <div className="col-auto">
                                    <i className={`fas fa-${e.Icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

  </>
}

export default Card