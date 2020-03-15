import React from "react"
import InfoBox from "../InfoBox/InfoBox"

import "./sizecontainer.style.scss"

const SizeContainer = ({ moduleInfo }) => (
  <div className="size-container">
    <h3>Bundle size</h3>
    <div className="stats-container">
      <InfoBox label="MINIFIED" unit="B" text={moduleInfo.size}></InfoBox>
      <InfoBox
        label="MINIFIED + GZIPPED"
        unit="B"
        text={moduleInfo.gzip}
      ></InfoBox>
    </div>
  </div>
)

export default SizeContainer
