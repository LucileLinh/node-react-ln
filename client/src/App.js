import React, { useState, useEffect } from "react"
import productService from "./services/productService"
import ContentContainer from "./components/ContentContainer/ContentContainer"
import Search from "./components/Search/Search"

function App() {
  const [moduleInfoList, setModuleInfoList] = useState([])
  const [selectedModule, setSelectedModule] = useState("")
  const [moduleInfo, setModuleInfo] = useState(null)

  useEffect(() => {
    if (selectedModule) {
      let res = productService.getModuleHistory(selectedModule)
      setModuleInfoList(res)
      setModuleInfo(res[0])
    }
  }, [selectedModule, moduleInfo])

  const setModule = async moduleName => {
    setSelectedModule(moduleName)
  }

  return (
    <div className="App">
      <div className="page-container">
        <Search onSelect={setModule} />
        {moduleInfo}
        <ContentContainer
          moduleInfo={selectedModule}
          moduleInfoList={moduleInfoList}
        />
      </div>
    </div>
  )
}

export default App
