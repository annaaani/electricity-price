import {describe, expect, test} from "vitest";
import {fireEvent, render} from "@testing-library/svelte";
import DeviceSwitcher from './DeviceSwitcher.svelte';
import {t} from '../../i18n';


describe('DeviceSwitcher.svelte', () => {
    test('default text', async () => {
        const {container} = render(DeviceSwitcher)
        let countryInput = container.querySelector('input:checked') as HTMLInputElement
        expect(countryInput.value).toBe(`${t.deviceDefault}`)
    })

    test('can switch device', async () => {
        const {container} = render(DeviceSwitcher, {device: `${t.devices.vacuum}`})
        const defaultRadio = container.querySelector('input:checked') as HTMLInputElement
        expect(defaultRadio.value).toBe(`${t.devices.vacuum}`)

        let devicesRadio = container.querySelector(`input[value=${t.devices.vacuum}}]`) as HTMLInputElement
        await fireEvent.click(devicesRadio)
        expect(devicesRadio.checked).toBe(true)
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