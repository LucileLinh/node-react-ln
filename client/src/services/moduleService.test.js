import { resToModuleInfoList } from "./moduleService"
import { data } from "./services/mockedData/sizes"

test("moduleService fn resTomoduleInfo()", () => {
  const res = resToModuleInfoList(data)
  expect(res.length).toBe(4)
})
