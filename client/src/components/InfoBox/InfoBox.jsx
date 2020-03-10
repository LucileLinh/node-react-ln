import React from "react"
import "./infobox.style.scss"

const InfoBox = ({ label, text, unit }) => (
  <div className="size-stats">
    <div className="text-container">
      <span className="text">{text}</span>
      <span className="unit">{unit}</span>
    </div>
    <p className="label">{label}</p>
  </div>
)

export default InfoBox
