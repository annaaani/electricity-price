<script lang="ts">
    import {t} from '../../i18n'
    let {watts = $bindable()} = $props()
</script>

<label class="input-container">
    <input type="number" bind:value={watts} min="0"/>
    <span class="unit">{t.watt}</span>
</label>