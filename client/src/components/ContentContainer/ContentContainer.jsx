import React from "react"
import SizeContainer from "../SizeContainer/SizeContainer"
import BarChart from "../BarChart/BarChart"

import "./contentcontainer.style.scss"

const ContentContainer = ({ dataInfo, data }) => (
  <div className="content-container">
    <div>
      {dataInfo.map((item, i) => (
        <SizeContainer
          key={i}
          title={item.title}
          label={item.label}
          unit={item.unit}
          text={item.text}
        ></SizeContainer>
      ))}
    </div>
    <BarChart data={data} />
  </div>
)

export default ContentContainer
