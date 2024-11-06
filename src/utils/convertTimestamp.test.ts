import {describe, expect, test} from "vitest"
import {convertTimestamp} from "./convertTimestamp";

describe('convertTimestamp.ts', () => {
    test('converts timestamp to hours and minutes', () => {
        expect(convertTimestamp(1730844000)).to.eq("00")
        expect(convertTimestamp(1730926800)).to.eq("23")
    })
})