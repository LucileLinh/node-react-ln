import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState({})
  // const [filtered, setFiltered] = useState([])
  const [result, setResult] = useState({})

  useEffect(() => {
    const fetchData = async keyword => {
      try {
        const res = await axios.get(
          `https://api.npms.io/v2/search/suggestions?q=${keyword}`,
        )
        console.log(res.data)
        setData(res.data)
        // setFiltered(res.data)
      } catch (err) {
        throw new Error(err)
      }
    }
    if (searchTerm.length > 0) fetchData(searchTerm)
  }, [searchTerm])

  // useEffect(() => {
  //   const results = filtered.filter(res =>
  //     res.package.name.toLowerCase().includes(result),
  //   )
  //   setData(results)
  // }, [result, filtered])
  //console.log(data)

  const onChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="search-container">
      {" "}
      <div className="autocomplete-input-box">
        <div className="autocomplete-input">
          <div className="autocomplete-input-container">
            <div
              style={{
                display: "inline-block",
                width: "100%",
                position: "relative",
              }}
            >
              <input
                placeholder="find package"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                autoComplete="off"
                type="text"
                value={searchTerm}
                onChange={onChange}
              />
            </div>
            <div class="autocomplete-input__dummy-input">
              <span class="dummy-input__package-name">npm</span>
              <span class="dummy-input__at-separator">@</span>
              <span class="dummy-input__package-version">6.14.2</span>
            </div>
          </div>
          <div className="search-icon">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M89.32 86.5L64.25 61.4C77.2 47 76.75 24.72 62.87 10.87 55.93 3.92 46.7.1 36.87.1s-19.06 3.82-26 10.77C3.92 17.8.1 27.05.1 36.87s3.82 19.06 10.77 26c6.94 6.95 16.18 10.77 26 10.77 9.15 0 17.8-3.32 24.55-9.4l25.08 25.1c.38.4.9.57 1.4.57.52 0 1.03-.2 1.42-.56.78-.78.78-2.05 0-2.83zM36.87 69.63c-8.75 0-16.98-3.4-23.17-9.6-6.2-6.2-9.6-14.42-9.6-23.17 0-8.75 3.4-16.98 9.6-23.17 6.2-6.2 14.42-9.6 23.17-9.6 8.75 0 16.98 3.4 23.18 9.6 12.77 12.75 12.77 33.55 0 46.33-6.2 6.2-14.43 9.6-23.18 9.6z"></path>
            </svg>
          </div>
        </div>

        <div className="suggestions-menu">
          {data.length > 0 &&
            data.map((r, i) => (
              //   <div class="suggestion" key={i}>
              //   <div>
              //     <em>{r.package.name}</em>
              //   </div>
              //   <div class="suggestion-description">
              //     {r.package.description}
              //   </div>
              // </div>
              <ul key={i}>
                <li onClick={r => setResult(r)}>{r.package.name}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  )
}
