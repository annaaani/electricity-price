<script>
    import langs from '../i18n/langs.json'
    import {changeLang, lang} from "../i18n";
</script>

<select value={lang} on:change={e => changeLang(e.currentTarget.value)}>
    {#each langs as lang}
        <option>{lang}</option>
    {/each}
</select>
