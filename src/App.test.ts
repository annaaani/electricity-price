import {render, waitFor} from '@testing-library/svelte';
import {describe, expect, test, vi} from 'vitest'
import App from './App.svelte';
import {tick} from "svelte";

describe('App.svelte', () => {
    const eleringResponse = {
        data: {
            ee: [
                {
                    "timestamp": 1730844000,
                    "price": 55
                },
                {
                    "timestamp": 1730847600,
                    "price": 4.55
                }
            ]
        }
    }

    test('shows loading while data is loading and H1 after successful load', async () => {
        vi.spyOn(window, 'fetch').mockResolvedValue({ok: true, json: async () => eleringResponse} as Response)

        const {getByText} = render(App)
        expect(getByText('Loading...')).toBeInTheDocument()

        await tick()
        expect(fetch).toHaveBeenCalled()

        await waitFor(() => {
            expect(getByText('Electricity prices')).toBeInTheDocument();
        });
    });

    test('shows loading while data is loading and H1 after successful load', async () => {
        vi.spyOn(window, 'fetch').mockResolvedValue({ok: true, json: async () => eleringResponse} as Response)

        const {getByText} = render(App)
        await tick()

        await waitFor(() => {
            expect(getByText('0')).toBeInTheDocument();
            expect(getByText('1')).toBeInTheDocument();
            expect(getByText('5.5 c/kWh')).toBeInTheDocument();
            expect(getByText('0.46 c/kWh')).toBeInTheDocument();
            expect(getByText('ee')).toBeInTheDocument();
            expect(getByText('lv')).toBeInTheDocument();
            expect(getByText('lt')).toBeInTheDocument();
            expect(getByText('fi')).toBeInTheDocument();
        });
    });
})