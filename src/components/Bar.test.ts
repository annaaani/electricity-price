import { render } from '@testing-library/svelte';
import {expect, test, describe} from 'vitest'
import Bar from './Bar.svelte';

describe('Bar.svelte', () => {
    test('renders time and price correctly', async () => {
        const { getByText } = render(Bar, {
            time: '12:00',
            price: 10,
        });

        getByText('12:00');
        getByText('10 c/KWh');
    });

    test('sets the correct height based on price', async () => {
        const { container } = render(Bar, {
            props: {
                time: '12:00',
                price: 10,
            },
        });

        const box = container.querySelector('.box');

        expect(box).toHaveStyle('height: 10em');
    });
});
