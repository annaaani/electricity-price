<script lang="ts">
    import {countries, type Country} from "../utils/countries"

    export let country: Country = countries[0]
</script>

{#each countries as countryCode}
    <label>
        <input
                type="radio"
                name="countryOption"
                value={countryCode}
                bind:group={country}
        >
        {countryCode}
    </label>
{/each}

<style>
</style>