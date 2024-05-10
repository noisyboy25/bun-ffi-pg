import { suffix } from "bun:ffi"
import { $ } from "bun"

await $`cd golib/ && go build -o golib.${suffix} --buildmode=c-shared main.go`
