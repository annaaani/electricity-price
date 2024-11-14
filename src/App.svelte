<script lang="ts" module>
    interface PriceData {
        timestamp: number
        price: number
    }

    export function getOverallMaxPrice(eleringDayPrices: Record<Country, PriceData[]> | null): number {
        if (!eleringDayPrices || Object.keys(eleringDayPrices).length === 0) return 0;
        return Math.max(...Object.values(eleringDayPrices)
            .flatMap(countryPrices => countryPrices.map(p => convertPriceMWhToSKWh(p.price))));
    }
</script>

<script lang="ts">
    import CountrySwitcher from "./components/histogram/CountrySwitcher.svelte"
    import DateSwitcher from "./components/histogram/DateSwitcher.svelte"
    import Histogram from "./components/histogram/Histogram.svelte"
    import {countries, type Country} from "./utils/countries"
    import {convertPriceMWhToSKWh} from "./utils/convertPriceMWhToSKWh";
    import {fetchData} from "./utils/loader";
    import {type ISODate, today} from "./utils/dates";
    import {t} from "./i18n"
    import LanguageSwitcher from "./components/histogram/LanguageSwitcher.svelte";
    import EnergyUsage from "./components/priceCalculator/EnergyUsage.svelte";

    let date: ISODate = $state(today)
    let country: Country = $state(countries[0])

    let eleringDayPrices: Record<Country, PriceData[]> | null = $state(null)
    let error: string | null

    async function load(date: string) {
        eleringDayPrices = await fetchData(date)
    }

    function getHourlyPrices(eleringDayPrices: Record<Country, PriceData[]> | null, country: Country) {
        return eleringDayPrices?.[country].map(p => convertPriceMWhToSKWh(p.price));
    }

    $effect(() => {
        load(date)
    })

    let hourlyPrices = $derived(getHourlyPrices(eleringDayPrices, country))
    let dailyMax = $derived(getOverallMaxPrice(eleringDayPrices))
</script>

<main>
    {#if error}
        <p>Error: {error}</p>

    {:else if eleringDayPrices}
        <h1>{t.title}</h1>
        <div class="options-bar">
            <div>
                <CountrySwitcher bind:country/>
            </div>
            <DateSwitcher bind:date/>
            <LanguageSwitcher/>
        </div>
        {#if hourlyPrices}
            <Histogram {hourlyPrices} {dailyMax} {date}/>
            <EnergyUsage/>
        {/if}
    {:else}
        <p>Loading...</p>
    {/if}
</main>

<style>
    .options-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 1em;
    }
</style>
