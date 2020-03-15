import { resToModuleInfoList } from "./productService"
import { data } from "./services/mockedData/sizes"

test("productService fn resTomoduleInfo()", () => {
  const res = resToModuleInfoList(data)
  expect(res.length).toBe(4)
})
