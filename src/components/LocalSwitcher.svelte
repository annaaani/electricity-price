<script lang="ts">
    let countries: String[] =  ["ee","lv", "lt", "fi"];
    export let local: string = countries[0];
</script>

{#each countries as country}
    <label>
        <input
                type="radio"
                name="countryOption"
                value={country}
                bind:group={local}
        />
        {country}
    </label>
{/each}

<style>

</style>