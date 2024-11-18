<script lang="ts">

    import {t} from '../../i18n'
    let {duration = $bindable()} = $props()
</script>

<div>
    <p>{t.duration}</p>
    <label class="input-container duration">
        <input type="number" bind:value={duration} min="0" max={String(23 - new Date().getHours())}/>
        <span class="unit">{t.hour}</span>
    </label>
</div>