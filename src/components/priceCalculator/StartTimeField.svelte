<script lang="ts">
    import {t} from '../../i18n'
    let {startTime = $bindable <number>()} = $props()

</script>

<label class="input-container startOption">
    <input type="number" bind:value={startTime} min={String(startTime)} max="23"/>
    <span class="unit">{t.hour}</span>
</label>