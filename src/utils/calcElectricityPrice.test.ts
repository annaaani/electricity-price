import {describe, expect, test, vi} from "vitest"
import {calcElectricityPrice} from "./calcElectricityPrice";

describe('calcElectricityPrice.ts', () => {

    test('calculates correct price for device usage', () => {
        vi.spyOn(Date.prototype, 'getHours').mockReturnValue(1);
        expect(calcElectricityPrice(2, 800, 3, [10.6, 11.2, 9, 17, 16.4, 19, 10.4, 12.2, 9.1, 14, 18.4, 24, 21.4, 20.5, 10.5, 11.9, 9.8, 15, 16.1, 18, 10.9, 12.4, 9.6, 17]))
            .to.eq('0.267')
    })

    test('return 0 if time is before current hour', () => {
        vi.spyOn(Date.prototype, 'getHours').mockReturnValue(4);
        expect(calcElectricityPrice(2, 800, 3, [10.6, 11.2, 9, 17, 16.4, 19, 10.4, 12.2, 9.1, 14, 18.4, 24, 21.4, 20.5, 10.5, 11.9, 9.8, 15, 16.1, 18, 10.9, 12.4, 9.6, 17]))
            .to.eq(0)
    })
})