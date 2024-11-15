<script lang="ts">
    import {countries, type Country} from "../../utils/countries"

    export let country: Country = countries[0]
</script>

<div class="country-option">
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
</div>


<style>
    .country-option {
        padding-top: 0.2em;
    }
</style>