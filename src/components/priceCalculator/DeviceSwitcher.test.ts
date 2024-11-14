import {describe, expect, test} from "vitest";
import {fireEvent, render} from "@testing-library/svelte";
import DeviceSwitcher from './DeviceSwitcher.svelte';
import {t} from '../../i18n';
import {tick} from "svelte";


describe('DeviceSwitcher.svelte', () => {
    test('default text', async () => {
        const {getByRole} = render(DeviceSwitcher, {device: undefined})
        const select = (getByRole('combobox') as HTMLSelectElement);
        expect(select.options[select.selectedIndex].text).toBe(t.devices.laundryMachine);
    })

    test('can switch device', async () => {
        const {getByRole} = render(DeviceSwitcher, {device: undefined})
        const select = (getByRole('combobox') as HTMLSelectElement);

        expect(select).toBeInTheDocument()
        expect(select.value).toEqual('laundryMachine')

        const secondOption = (select.querySelector('option[value="car"]') as HTMLOptionElement);
        expect(secondOption).toBeInTheDocument()

        await fireEvent.change(select, {target: {value: secondOption.value}});
        await tick()
        expect((select as HTMLSelectElement).value).toEqual('car')
    })

    test('renders options with correct language devices', () => {
        const {getAllByRole} = render(DeviceSwitcher);
        const options = getAllByRole('option') as HTMLOptionElement[];

        expect(options).toHaveLength(Object.keys(t.devices).length);

        Object.entries(t.devices).forEach(([code, name], index) => {
            expect(options[index].value).toBe(code);
            expect(options[index].textContent).toBe(name);
        })
    });
})