import React, { useState, useEffect } from "react"
import moduleService from "../services/moduleService"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Search from "./Search/Search"

function ModulePage() {
  const [moduleInfoList, setModuleInfoList] = useState([])
  const [selectedModuleName, setSelectedModuleName] = useState("")

  useEffect(() => {
    async function fetch() {
      if (selectedModuleName) {
        let res = await moduleService.getModuleHistory(selectedModuleName)
        setModuleInfoList(res)
      }
    }
    fetch()
  }, [selectedModuleName])

  const setModule = moduleName => {
    setSelectedModuleName(moduleName)
  }

  return (
    <div className="page-container">
      <Search onSelect={setModule} />
      {selectedModuleName && (
        <ContentContainer moduleInfoList={moduleInfoList} />
      )}
    </div>
  )
}

export default ModulePage
