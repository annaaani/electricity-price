<script lang="ts">
    let {value = $bindable(), label, unit, minValue, maxValue}: {
        value: number,
        label: string,
        unit: string,
        minValue: number,
        maxValue: number
    } = $props()

</script>

<div>
    <p>{label}</p>
    <label class="input-container">
        <input type="number" step="1" bind:value min={String(minValue)} max={String(maxValue)}/>
        <span class="unit">{unit}</span>
    </label>
</div>


<style>
    .input-container {
        display: inline-flex;
        align-items: center;
        position: relative;
    }

    input[type="number"] {
        padding: 0.5em;
        margin-right: 0.5em;
    }

    input {
        padding: 0 0.5em;
    }
</style>