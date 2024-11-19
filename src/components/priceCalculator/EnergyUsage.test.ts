import {render} from '@testing-library/svelte';
import {describe, expect, test, vi, beforeEach, afterEach} from 'vitest'
import {tick} from "svelte";
import EnergyUsage from "./EnergyUsage.svelte";

describe('EnergyUsage', () => {
    const hourlyPrices = [10.6, 11.2, 9, 17, 16.4, 19, 10.4, 12.2, 9.1, 14, 18.4, 24, 21.4, 20.5, 10.5, 11.9, 9.8, 15, 16.1, 18, 10.9, 12.4, 9.6, 17]

    beforeEach(() => {
        const mockDate = new Date('2023-11-19T10:00:00');
        vi.setSystemTime(mockDate);
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('shows correct default data after successful load', async () => {
        const {container, getByText} = render(EnergyUsage, {props: {hourlyPrices}});

        vi.spyOn(Date.prototype, 'getHours').mockReturnValue(10);

        await tick();
        expect(getByText('Laundry machine')).toBeInTheDocument();
        expect(container.querySelector('p')!.textContent).to.eq('Device')
        expect(container.querySelector('label')!.textContent).to.eq(' h')
        expect(getByText('W')).toBeInTheDocument();
        expect(getByText('Cost: 0.527 €')).toBeInTheDocument();

    });
})



