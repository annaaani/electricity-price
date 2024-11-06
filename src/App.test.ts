import {render, fireEvent, waitFor} from '@testing-library/svelte';
import {expect, test, describe, vi} from 'vitest'
import App from './App.svelte';
import {tick} from "svelte";

describe('App.svelte', () => {
    test('shows loading while data is loading', async () => {
        const {getByText} = render(App)
        global.fetch = vi.fn()
        expect(getByText('Loading...')).toBeInTheDocument()
        // await tick()
        // TODO: expect(fetch).toHaveBeenCalled()
    });
})