<script lang="ts">
    import {t} from '../../i18n'
    let {watts = $bindable()} = $props()
</script>

<label class="input-container">
    <input type="number" bind:value={watts} min="0"/>
    <span class="unit">{t.watt}</span>
</label>

<style>
    .input-container {
        display: inline-flex;
        align-items: center;
        position: relative;
    }

    input[type="number"] {
        padding: 0.5em;
    }

    .unit {
        position: absolute;
        right: 2em;
        color: #555;
        pointer-events: none;
    }

</style>