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

    let date = new Date().toISOString().split("T")[0]
    let country: Country = countries[0]

    let eleringDayPrices: Record<Country, PriceData[]> | null = null
    let error: string | null

    async function load(date: string) {
        eleringDayPrices = await fetchData(date)
    }

    $: load(date)
    $: hourlyPrices = eleringDayPrices?.[country].map(p => convertPriceMWhToSKWh(p.price))
    $: hours = eleringDayPrices?.[country].map(p => convertTimestamp(p.timestamp))
</script>

<main>
    {#if error}
        <p>Error: {error}</p>
    {:else if eleringDayPrices}

        <h1>Electricity prices</h1>
<!--        <DateComponent/>-->
        <CountrySwitcher bind:country={country}/>
        <Histogram {hourlyPrices} {hours}/>

    {:else}
        <p>Loading...</p>
    {/if}
</main>
