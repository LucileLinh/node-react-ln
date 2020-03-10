import React from "react"
import InfoBox from "../InfoBox/InfoBox"

import "./sizecontainer.style.scss"

const SizeContainer = ({ title, label, text, unit }) => (
  <div className="size-container">
    <h3>{title}</h3>
    <div className="stats-container">
      <InfoBox label={label} unit={unit} text={text}></InfoBox>
      <InfoBox label={label} unit={unit} text={text}></InfoBox>
    </div>
  </div>
)

export default SizeContainer
