import {render, waitFor} from '@testing-library/svelte';
import {describe, expect, test, vi} from 'vitest'
import {tick} from "svelte";
import EnergyUsage from "./EnergyUsage.svelte";

describe('EnergyUsage', () => {
    const hourlyPrices = [10.6, 11.2, 9, 17, 16.4, 19, 10.4, 12.2, 9.1, 14, 18.4, 24, 21.4, 20.5, 10.5, 11.9, 9.8, 15, 16.1, 18, 10.9, 12.4, 9.6, 17]

    test('shows correct default data after successful load', async () => {
        const {container, getByText} = render(EnergyUsage, {props: {hourlyPrices}});

        await tick();

        await waitFor(() => {
            expect(getByText('Laundry machine')).toBeInTheDocument();
            expect(container.querySelector('.duration')?.textContent).to.eq(' h')
            expect(container.querySelector('.startOption')?.textContent).to.eq(' h')
            expect(getByText('W')).toBeInTheDocument();
        });
    });

})



