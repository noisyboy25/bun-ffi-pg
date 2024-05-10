package main

import "C"
import "fmt"

//export add
func add(a, b int) int {
	return a + b
}

//export helloString
func helloString() *C.char {
	return C.CString(fmt.Sprintf("Hello from Go!"))
}

func main() {}
