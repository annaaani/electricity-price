import {describe, expect, test, vi} from "vitest"
import {fetchData, fetchUrl} from "./loader"

describe('loader.ts', () => {
    test('fetches full day of prices with correct UTC timestamps', () => {
        expect(fetchUrl('2024-11-06')).to.eq('https://dashboard.elering.ee/api/nps/price?start=2024-11-05T22:00:00.000Z&end=2024-11-06T21:59:00.000Z')
        // TODO: test summer time
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

        expect(fetch).toHaveBeenCalledWith('https://dashboard.elering.ee/api/nps/price?start=2024-11-05T22:00:00.000Z&end=2024-11-06T21:59:00.000Z')
        expect(result).toEqual(mockResponse.data)
    })

    test('throws an error when fetch fails', async () => {
        // @ts-ignore
        // TODO
        (fetch as vi.Mock).mockResolvedValueOnce({
            ok: false,
        })

        const date = '2024-11-06';
        await expect(fetchData(date)).rejects.toThrow('Network response was not ok');
    })
})