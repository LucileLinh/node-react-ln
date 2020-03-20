import React, { useEffect } from "react"
import "./barchart.style.scss"
import { drawBarChart } from "./barChartGenerator"

export default function BarChart({ data }) {
  useEffect(() => {
    drawBarChart(data)
  })

  return (
    <div className="chart-container">
      <svg className="chart" height="500px" width="400px"></svg>
      <div className="legend">
        <div className="bar1">
          <div className="colorbox"></div>
          <span> MIN</span>
        </div>
        <div className="bar2">
          <div className="colorbox"></div>
          <span> GZIP</span>
        </div>
      </div>
    </div>
  )
}
