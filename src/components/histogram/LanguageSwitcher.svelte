<script>
    import {changeLang, lang, t} from "../../i18n/";
</script>

<div class="date-switcher">
    <select value={lang} onchange={e => changeLang(e.currentTarget.value)}>
        {#each Object.entries(t.languageCodes) as [code, name]}
            <option value={code}>{name}</option>
        {/each}
    </select>
</div>


<style>
    select {
        padding: 0.5em 0.3em;
        margin-top: 0.1em;
    }
</style>