<script lang="ts">
    import LocalSwitcher from "./components/LocalSwitcher.svelte";
    import DateComponent from "./components/DateComponent.svelte";
    import Histogram from "./components/Histogram.svelte";

    interface PriceData {
        timestamp: number;
        price: number;
    }

    let local: "lv" | "ee" | "fi" | "lt" = "ee";
    let data: Record<string, PriceData[]> | null = null;
    let error: String | null = null;

    $: {
        data = null;
        error = null;
// Todo: fetch update, generate todays data by default
        const fetchData = async () => {
            try {
                const response = await fetch('https://dashboard.elering.ee/api/nps/price?start=2024-11-04T22:00:00.000Z&end=2024-11-05T21:59:59.999Z');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                data = jsonData.data[local];
            } catch (err) {
                error = err.message;
            }
        };

        fetchData();
    }
</script>

<main>
    {#if error}
        <p>Error: {error}</p>
    {:else if data}
        <h1>Electricity prices</h1>
        <DateComponent/>
        <LocalSwitcher bind:local={local}/>
        <Histogram {data}/>

    {:else}
        <p>Loading...</p>
    {/if}
</main>
