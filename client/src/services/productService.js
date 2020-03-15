import axios from "axios"

export default {
  getAllModules: async keyword => {
    try {
      const res = await axios.get(
        `https://api.npms.io/v2/search/suggestions?q=${keyword}`,
      )
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  },
  getModuleHistory: async moduleName => {
    try {
      const res = await axios.get(
        `http://cost-of-modules.herokuapp.com/api/package-history?package=${moduleName}`,
      )
      const allVersions = Object.values(res.data)
      const majorVersion = allVersions[allVersions.length - 1].version.charAt(0)
      if (allVersions[0].version) {
        const allMajors = allVersions.filter(
          v => v.version && v.version.match(new RegExp(`^${majorVersion}`)),
        )
        const lastPrevMajor = allVersions.filter(
          v => v.version && v.version.match(new RegExp(`^${majorVersion - 1}`)),
        )
        return [
          ...allMajors.slice(allMajors.length - 3).reverse(),
          lastPrevMajor[0],
        ]
      }
      return []
    } catch (err) {
      throw new Error(err)
    }
  },
}
