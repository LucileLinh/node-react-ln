import React from "react"
import SizeContainer from "../SizeContainer/SizeContainer"
import BarChart from "../BarChart/BarChart"

import "./contentcontainer.style.scss"

const ContentContainer = ({ moduleInfo, moduleInfoList }) => (
  <div className="content-container">
    {moduleInfo && (
      <div>
        <SizeContainer
          key={moduleInfo.version}
          moduleInfo={moduleInfo}
        ></SizeContainer>

        {moduleInfoList.length > 0 && <BarChart data={moduleInfoList} />}
        {moduleInfoList.length === 0 && <p>No info found</p>}
      </div>
    )}
  </div>
)

export default ContentContainer
