import {describe, expect, test} from "vitest"
import {convertPriceMWhToSKWh} from "./convertPriceMWhToSKWh";

describe('convertPriceMWhToSKWh.ts', () => {
    test('converts MegaWatt per hour to KiloWatt per hour', () => {
        expect(convertPriceMWhToSKWh(71.37)).to.eq(7.14)
    })
})