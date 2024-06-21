import React from 'react'
import Card from './Card'

function Dashboard() {

    let data = [
        
            {
                Title : "Earnings Monthly",
                Value : "$ 40,000",
                Color : "primary",
                Icon : "calendar",
                Isprogress : false
            },

            {
                Title : "Earning Annual",
                Value : "$ 210,000",
                Color : "success",
                Icon : "dollar-sign",
                Isprogress : false
            },

            {
                Title : "Task",
                Value : "50",
                Color : "info",
                Icon : "clipboard-list",
                Isprogress : true
            },

            {
                Title : "Pending Requests",
                Value : "18",
                Color : "warning",
                Icon : "comments",
                Isprogress : false
            }
    ]

  return <>

     {/* <!-- Content Wrapper --> */}
     <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Begin Page Content --> */}
             
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    {
                        data.map((e,i)=>{
                            return <Card e={e} key={i}></Card>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  
  

  </>
}

export default Dashboard