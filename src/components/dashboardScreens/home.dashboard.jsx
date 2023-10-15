import React from "react"
import Card from "../../hoc/Custum-card"
import cardData from"../../json/cardComponent.json"
import './dashboardComponent.css'
const DashboardHome = () => {
  return (
    <div style={{width:'100%'}}>
      <div
        style={{
          padding: 12,
          fontSize: 16,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Hello Rancho
      </div>
    <div className="cardDiv">
        {
      cardData?.map((value)=>{
          return <Card style={{marginBottom:2}}>
            <div style={{display:"flex"}} >
               <img src="" alt="" srcset="" height={120} width={150} />
               <div style={{padding:2,}}>
              <div> {
                  value.name
                  
                }
                </div> 
                <div>
                {
                  value.total
                  
                }
                </div>
                {
                  value.increment?value.increment:value.decrement
                  
                }
               </div>
            </div>
          </Card>
        })
      }
    </div>
    </div>
  )
}

export default DashboardHome
