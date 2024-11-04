<script>
    import { onMount } from 'svelte';
    import Histogram from "./Histogram.svelte";
    let dataaa = [10, 20, 30, 25, 15];
    let labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

    let data = null;
    let error = null;

    onMount(async () => {
        try {
            const response = await fetch('https://dashboard.elering.ee/api/nps/price?start=2024-11-03T22:00:00.000Z&end=2024-11-04T21:59:59.999Z');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            data = await response.json();
        } catch (err) {
            error = err.message;

        }
    });
</script>

{#if error}
    <p>Error: {error}</p>
{:else if data}
    <Histogram {dataaa} {labels} />
<!--    <pre>{JSON.stringify(data, null, 2)}</pre>-->
{:else}
    <p>Loading...</p>
{/if}