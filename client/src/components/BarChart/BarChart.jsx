import React from "react"
import "./barchart.style.scss"

export default function BarChart({ data }) {
  return (
    <div className="chart-container">
      <p>BarChart</p>
      <p>{JSON.stringify(data)}</p>
      <svg height="600px" width="300px"></svg>
    </div>
  )
}
