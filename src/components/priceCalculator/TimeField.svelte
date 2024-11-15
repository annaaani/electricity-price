<script lang="ts">
    import {t} from '../../i18n'
    let {duration = $bindable()} = $props()
</script>

<label class="input-container">
    <input type="number" bind:value={duration} min="0"/>
    <span class="unit">{t.hour}</span>
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