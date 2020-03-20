import React from "react"
import InfoBox from "../InfoBox/InfoBox"

import "./sizecontainer.style.scss"

const SizeContainer = ({ moduleInfo }) => (
  <div className="size-container">
    <h3>Bundle size</h3>
    <div className="stats-container">
      <InfoBox
        label="MINIFIED"
        unit="kB"
        text={parseInt(moduleInfo.size / 1000)}
      ></InfoBox>
      <InfoBox
        label="MINIFIED + GZIPPED"
        unit="kB"
        text={parseInt(moduleInfo.gzip / 1000)}
      ></InfoBox>
    </div>
  </div>
)

export default SizeContainer
