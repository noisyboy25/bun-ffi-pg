import { dlopen, FFIType, suffix } from "bun:ffi"
const { i32, cstring } = FFIType

const path = `golib/golib.${suffix}`

const {
  symbols: {
    add,
    helloString
  }
}
  = dlopen(path, {
    add: {
      args: [i32, i32],
      returns: i32,
    },
    helloString: {
      returns: cstring
    }
  })

const arr = [5, 3, 1, 0, 2, 4]
console.log(add(arr[0], arr[1]))
console.log(helloString())

