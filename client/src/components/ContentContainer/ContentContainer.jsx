import React from "react"
import SizeContainer from "../SizeContainer/SizeContainer"
import BarChart from "../BarChart/BarChart"

import "./contentcontainer.style.scss"

const ContentContainer = ({ moduleInfoList }) => (
  <div className="content-container">
    {(!moduleInfoList[0] || !moduleInfoList[0].version) && (
      <p>Not enough detail found for this package</p>
    )}
    {moduleInfoList[0] && moduleInfoList[0].version && (
      <div>
        <SizeContainer
          key={!moduleInfoList[0].version}
          moduleInfo={moduleInfoList[0]}
        ></SizeContainer>
        <BarChart data={moduleInfoList} />
      </div>
    )}
  </div>
)

export default ContentContainer
