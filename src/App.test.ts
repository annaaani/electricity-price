import {render, fireEvent, waitFor} from '@testing-library/svelte';
import {expect, test, describe} from 'vitest'
import App from './App.svelte';

describe('App.svelte', () => {
    test('renders the page title', async () => {
        const {getByText} = render(App);

        getByText('Loading...');
        // getByText('Electricity prices');
    });
})