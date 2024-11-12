<script lang="ts">
    import CountrySwitcher from "./components/CountrySwitcher.svelte"
    import DateSwitcher from "./components/DateSwitcher.svelte"
    import Histogram from "./components/Histogram.svelte"
    import {countries, type Country} from "./utils/countries"
    import {convertPriceMWhToSKWh} from "./utils/convertPriceMWhToSKWh";
    import {fetchData} from "./utils/loader";
    import {type ISODate, today} from "./utils/dates";

    interface PriceData {
        timestamp: number
        price: number
    }

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

    function getAllPrices(eleringDayPrices: Record<string, PriceData[]>) {
        if (!eleringDayPrices || Object.keys(eleringDayPrices).length === 0) return [0];
        return Object.values(eleringDayPrices)
            .flatMap(countryPrices => countryPrices.map(p => convertPriceMWhToSKWh(p.price)));
    }

    function getOverallMaxPrice(eleringDayPrices: Record<Country, PriceData[]> | null): number {
        return Math.max(...getAllPrices(eleringDayPrices!));
    }

    function getOverallMinPrice(eleringDayPrices: Record<Country, PriceData[]> | null): number {
        return Math.min(...getAllPrices(eleringDayPrices!));
    }

    $effect(() => {
        load(date)
    })


    let hourlyPrices = $derived(getHourlyPrices(eleringDayPrices, country))
    let dailyMax = $derived(getOverallMaxPrice(eleringDayPrices))
    let dailyMin = $derived(getOverallMinPrice(eleringDayPrices))
</script>

<main>
    {#if error}
        <p>Error: {error}</p>

    {:else if eleringDayPrices}
        <h1>Electricity prices</h1>
        <div class="options-bar">
            <div>
                <CountrySwitcher bind:country/>
            </div>
            <DateSwitcher bind:date/>
        </div>
        {#if hourlyPrices}
            <Histogram {hourlyPrices} {dailyMax} {dailyMin} {date}/>
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
