<script lang="ts">

    import {t} from '../../i18n'
    let {duration = $bindable()} = $props()
    // TODO: add max duration according to the time of the day and available hours
</script>

<label class="input-container duration">
    <input type="number" bind:value={duration} min="0"/>
    <span class="unit">{t.hour}</span>
</label>