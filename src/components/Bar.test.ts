import {render} from '@testing-library/svelte';
import {expect, test, describe} from 'vitest'
import Bar from './Bar.svelte';

describe('Bar', () => {
    test('renders time and price correctly', async () => {
        const {getByText} = render(Bar, {
            dailyMax: 20,
            time: '12:00',
            price: 10,
        });

        expect(getByText('12:00')).toBeInTheDocument();
        expect(getByText('10 c/KWh')).toBeInTheDocument();
    });

    test('sets the correct height based on price', async () => {
        const {container} = render(Bar, {
            dailyMax: 20,
            time: '12:00',
            price: 10,
        });

        const box = container.querySelector('.box');

        // TODO: re-calc height based on %
        expect(box).toHaveStyle('height: 10em');
    });
});
