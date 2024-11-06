<script lang="ts">
    import CountrySwitcher from "./components/CountrySwitcher.svelte"
    import DateComponent from "./components/DateComponent.svelte"
    import Histogram from "./components/Histogram.svelte"
    import {countries, type Country} from "./utils/countries"
    import {convertPriceMWhToSKWh} from "./utils/convertPriceMWhToSKWh";
    import {convertTimestamp} from "./utils/convertTimestamp";
    import {fetchData} from "./utils/loader";

    interface PriceData {
        timestamp: number
        price: number
    }

    let date = $state(new Date().toISOString().split("T")[0])
    let country: Country = $state(countries[0])

    let eleringDayPrices: Record<Country, PriceData[]> | null = $state(null)
    let error: string | null

    async function load(date: string) {
        eleringDayPrices = await fetchData(date)
    }

    function getHourlyPrices(eleringDayPrices: Record<Country, PriceData[]> | null, country: Country) {
        return eleringDayPrices?.[country].map(p => convertPriceMWhToSKWh(p.price));
    }

    function getHours(eleringDayPrices: Record<Country, PriceData[]> | null, country: Country) {
        return eleringDayPrices?.[country].map(p => convertTimestamp(p.timestamp));
    }

    $effect(() => {
        console.log(fetch, window.fetch, fetch === window.fetch)
        load(date)
    })

    let hourlyPrices = $derived(getHourlyPrices(eleringDayPrices, country))
    let hours = $derived(getHours(eleringDayPrices, country))
</script>

<main>
    {#if error}
        <p>Error: {error}</p>

    {:else if eleringDayPrices}
        <h1>Electricity prices</h1>
        <div class="optionsBar">
            <div>
                <CountrySwitcher bind:country/>
            </div>
            <DateComponent bind:date/>
        </div>
        <Histogram {hourlyPrices} {hours}/>

    {:else}
        <p>Loading...</p>
    {/if}
</main>

<style>
    .optionsBar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 1em;
    }
</style>
