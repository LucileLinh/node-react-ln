import React from "react"
import SizeContainer from "../SizeContainer/SizeContainer"
import BarChart from "../BarChart/BarChart"

import "./contentcontainer.style.scss"

const ContentContainer = ({ moduleInfo, moduleInfoList }) => (
  <div className="content-container">
    <div>
      {moduleInfo && (
        <SizeContainer
          key={moduleInfo.version}
          moduleInfo={moduleInfo}
        ></SizeContainer>
      )}
    </div>
    {/* <BarChart data={moduleInfoList} /> */}
  </div>
)

export default ContentContainer
