import {render, waitFor} from '@testing-library/svelte';
import {describe, expect, test, vi} from 'vitest'
import App from './App.svelte';
import {tick} from "svelte";

describe('App.svelte', () => {
    const url = 'https://dashboard.elering.ee/api/nps/price?start=2024-11-06T22:00:00.000Z&end=2024-11-07T21:59:00.000Z'

    test('shows loading while data is loading', async () => {
        vi.spyOn(window, 'fetch')
        const {getByText} = render(App)
        expect(getByText('Loading...')).toBeInTheDocument()

        vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({data: []})
        });

        await tick()
        expect(fetch).toHaveBeenCalledWith(url)

        await waitFor(() => {
            expect(getByText('Electricity prices')).toBeInTheDocument();
        });
    });
})