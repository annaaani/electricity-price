<script>
    import {changeLang, lang, t} from "../i18n";
</script>

<select value={lang} onchange={e => changeLang(e.currentTarget.value)}>
    {#each Object.entries(t.languageCodes) as [code, name]}
        <option value={code}>{name}</option>
    {/each}
</select>
