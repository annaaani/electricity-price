<script lang="ts">
    import {t} from '../../i18n'

    let {startTime = $bindable()} = $props()

</script>

<div>{startTime} : 00</div>