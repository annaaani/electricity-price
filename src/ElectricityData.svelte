<script>
    import { onMount } from 'svelte';

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
    <pre>{JSON.stringify(data, null, 2)}</pre>
{:else}
    <p>Loading...</p>
{/if}