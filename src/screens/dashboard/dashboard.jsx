import React, { useEffect, useState } from "react"
import "./dashboard.css"
import { MdDashboardCustomize } from "react-icons/md"
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai"
import { pages } from "../../utils/routes"
const Dashboard = () => {
  const [swidth, setswidth] = useState(window.innerWidth)
  const [click, setClick] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setswidth(window.innerWidth)
    }

    window.onresize = handleResize

    return () => {
      window.onresize = null
    }
  }, [])
  console.log('pages', pages)
console.log('Object.values(pages)', Object.values(pages)[0])
  return (
    <div className="mainDiv">
      {swidth <= 640 && !click && (
        <div className="navBar">
          <AiOutlineMenuUnfold
            style={{ marginLeft: 17 }}
            color="#fff"
            size={23}
            onClick={() => setClick(true)}
          />
        </div>
      )}
      <div className={click ? "mainClick" : "main"}>
        <div className="dashboard-menu">
          <div>
            <div className="head">
              <MdDashboardCustomize color="#fff" size={23} />
              <h2>Dashboard</h2>
              {swidth <= 640 && (
                <div style={{ position: "absolute", right: 12 }}>
                  <AiOutlineClose
                    size={23}
                    color="#fff"
                    onClick={() => setClick(false)}
                  />
                </div>
              )}
            </div>
            <div className="tabDiv">
              <h4>dashboard</h4>
              <h4>dashboard</h4>
              <h4>dashboard</h4>
              <h4>dashboard</h4>
              <h4>dashboard</h4>
            </div>
          </div>
          <div className="body">
   
          </div>
        </div>
       
      </div>
        {
      pages[0]
    }
    </div>
  )
}

export default Dashboard
