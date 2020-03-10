import React, { useEffect } from "react"
import "./barchart.style.scss"
import { drawBarChart } from "./barChartGenerator"

export default function BarChart({ data }) {
  useEffect(() => {
    drawBarChart(data)
  })

  return (
    <div className="chart-container">
      <svg className="chart" height="600px" width="500px"></svg>
    </div>
  )
}
