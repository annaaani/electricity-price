import {fireEvent, render, waitFor} from '@testing-library/svelte';
import {describe, expect, test, vi} from 'vitest'
import App, {getOverallMaxPrice} from './App.svelte';
import {tick} from "svelte";
import {t} from "./i18n";

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

        const {getByText, container} = render(App)
        await tick()

        await waitFor(() => {
            expect(container.querySelector('.hour')?.textContent).to.equal('0');
            expect(getByText('1')).toBeInTheDocument();
            expect(getByText('5.5 c/kWh')).toBeInTheDocument();
            expect(getByText('0.46 c/kWh')).toBeInTheDocument();
            expect(getByText('ee')).toBeInTheDocument();
            expect(getByText('lv')).toBeInTheDocument();
            expect(getByText('lt')).toBeInTheDocument();
            expect(getByText('fi')).toBeInTheDocument();
        });
    });

    test('correct getOverallMaxPrice', () => {
        const result = getOverallMaxPrice({
            ...eleringResponse.data,
            lt: [],
            lv: [],
            fi: []
        });
        expect(result).toBe(5.5);
    });

    // test('renders options with correct headers', async () => {
    //     vi.spyOn(window, 'fetch').mockResolvedValue({ok: true, json: async () => eleringResponse} as Response);
    //
    //     const {getAllByRole, getByRole, getByText} = render(App);
    //
    //     await waitFor(() => expect(getByText(t.title)).toBeInTheDocument());
    //
    //     const select = getByRole('combobox') as HTMLInputElement;
    //
    //     expect(getByText(t.title)).toBeInTheDocument();
    //
    //     await fireEvent.change(select, {target: {value: 'et'}});
    //
    //     await waitFor(() => expect(getByText('Elektrihinnad')).toBeInTheDocument());
    //
    //     const options = getAllByRole('option') as HTMLOptionElement[];
    //
    //     const selectedOption = options.find(option => option.selected);
    //     expect(selectedOption).toBeTruthy();
    //     expect(selectedOption?.value).toBe('et');
    //     expect(selectedOption?.textContent).toBe('Eesti');
    // });
})



// vi.spyOn(window.location, 'reload').mockImplementation(vi.fn())
