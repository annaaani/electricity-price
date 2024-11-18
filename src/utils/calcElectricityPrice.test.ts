import {describe, expect, test} from "vitest"
import {calcElectricityPrice} from "./calcElectricityPrice";

describe('convertPriceMWhToSKWh.ts', () => {
    test('converts MegaWatt per hour to KiloWatt per hour', () => {
        expect(calcElectricityPrice(2, 800, 3, [10.6, 11.2, 9, 17, 16.4, 19])).to.eq('0.267')
    })
})