<script lang="ts">
    import {t} from '../../i18n'
    let {startTime = $bindable <number>(17)} = $props()

</script>

<label class="input-container startOption">
    <input type="number" bind:value={startTime} min={String(startTime)} max="23"/>
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