import {describe, expect, test, vi} from "vitest"
import {fetchData, fetchUrl} from "./loader"

describe('loader.ts', () => {
    test('fetches full day of prices with correct UTC timestamps - wintertime', () => {
        expect(fetchUrl('2024-11-06')).to.eq('/api/nps/price?start=2024-11-05T22:00:00.000Z&end=2024-11-06T21:59:00.000Z')
    })

    test('fetches full day of prices with correct UTC timestamps - summertime ', () => {
        expect(fetchUrl('2024-06-06')).to.eq('/api/nps/price?start=2024-06-05T21:00:00.000Z&end=2024-06-06T20:59:00.000Z')
    })

    test('fetches Elering price data and returns json data', async () => {
        const mockResponse = {
            data: {
                key: 'value',
            },
        };
        vi.spyOn(window, 'fetch').mockResolvedValue({ok: true, json: async () => mockResponse} as Response)

        const date = '2024-11-06'
        const result = await fetchData(date)

        expect(fetch).toHaveBeenCalledWith('/api/nps/price?start=2024-11-05T22:00:00.000Z&end=2024-11-06T21:59:00.000Z')
        expect(result).toEqual(mockResponse.data)
    })

    test('throws an error when fetch fails', async () => {
        // @ts-ignore
        vi.spyOn(window, 'fetch').mockResolvedValue({ok: false, json: async () => mockResponse} as Response)

        const date = '2024-11-06';
        await expect(fetchData(date)).rejects.toThrow('Network response was not ok');
    })
})