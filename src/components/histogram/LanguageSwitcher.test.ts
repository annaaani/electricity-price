import {describe, expect, test, vi} from "vitest";
import {fireEvent, render} from "@testing-library/svelte";
import LanguageSwitcher from './LanguageSwitcher.svelte';
import {changeLang, t} from '../../i18n';
import {tick} from "svelte";

vi.mock('../../i18n', async () => {
    const actual = await vi.importActual('../../i18n')
    return {...actual, changeLang: vi.fn()}
});

describe('LanguageSwitcher.svelte', () => {

    test('renders options with correct language labels and codes', () => {
        const {getAllByRole} = render(LanguageSwitcher);
        const options = getAllByRole('option') as HTMLOptionElement[];

        expect(options).toHaveLength(Object.keys(t.languageCodes).length);

        Object.entries(t.languageCodes).forEach(([code, name], index) => {
            expect(options[index].value).toBe(code);
            expect(options[index].textContent).toBe(name);
        })
    });

    test('selecting a new language calls changeLang with the correct value', async () => {
        const {getByRole} = render(LanguageSwitcher);
        const select = (getByRole('combobox') as HTMLSelectElement);

        expect(select).toBeInTheDocument()
        expect(select.value).toEqual('en')

        const secondOption = (select.querySelector('option[value="et"]') as HTMLOptionElement);
        expect(secondOption).toBeInTheDocument()

        await fireEvent.change(select, {target: {value: secondOption.value}});
        await tick()
        expect((select as HTMLSelectElement).value).toEqual('et')
        expect(changeLang).toBeCalledWith("et")
    });
});