<script lang="ts">
    import {t} from '../../i18n'
    let {watts = $bindable()} = $props()
</script>

<div>
    <p>{t.power}</p>
    <label class="input-container power">
        <input type="number" bind:value={watts} min="0" max="100000"/>
        <span class="unit">{t.watt}</span>
    </label>
</div>