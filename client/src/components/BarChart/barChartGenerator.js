import { scaleBand, scaleLinear } from "d3-scale"
import { axisBottom, axisLeft } from "d3-axis"
import { max, range } from "d3-array"
import { select } from "d3-selection"

import "./barchart.style.scss"

const margin = { top: 20, right: 20, bottom: 70, left: 40 },
  width = 400,
  height = 500

export const drawBarChart = items => {
  const x = scaleBand()
    .domain(range(items.length))
    .range([margin.left, width - margin.right])
    .padding(0.3)

  const barWidth = x.bandwidth()

  const y = scaleLinear()
    .domain([0, max(items, d => d && d.size)])
    .nice()
    .range([height - margin.bottom, margin.top])

  const xAxis = g =>
    g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        axisBottom(x)
          .tickFormat((d, i) => items[i] && items[i].version)
          .tickSizeOuter(0),
      )
      .call(g => g.select(".domain").remove())
      .call(g =>
        g
          .selectAll("text")
          .attr("transform", `translate(-${barWidth / 4},25)rotate(-90)`),
      )

  const yAxis = g =>
    g
      .call(axisLeft(y))
      .call(g => g.select(".domain").remove())
      .call(g =>
        g
          .append("text")
          .attr("x", -margin.left)
          .attr("y", 10)
          .attr("fill", "#000")
          .attr("text-anchor", "start")
          .text((d, i) => items[i].size),
      )

  const svg = select("svg.chart")

  svg
    .append("g")
    .selectAll("rect")
    .data(items)
    .join("rect")
    .attr("fill", d => (d ? "#65C3F8" : "#cccccc"))
    .attr("x", (d, i) => x(i))
    .attr("y", d => (d ? y(d.size) : height / 3))
    .attr("rx", 3)
    .attr("ry", 3)
    .attr("height", d => (d ? y(0) - y(d.size) : y(0) - height / 3))
    .attr("width", x.bandwidth())
    .on("mouseover", function() {})

  svg
    .append("g")

    .selectAll("rect")
    .data(items)
    .join("rect")
    .attr("fill", d => d && "#65A1F8")
    .attr("x", (d, i) => x(i))
    .attr("y", d => (d ? y(d.gzip) : 0))
    .attr("rx", 3)
    .attr("ry", 3)
    .attr("height", d => (d ? y(0) - y(d.gzip) : 0))
    .attr("width", barWidth)
    .on("mouseover", function() {})

  svg.append("g").call(xAxis)

  svg.append("g").call(yAxis)

  return svg.node()
}
