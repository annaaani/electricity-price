<script>
    import UsageDuration from './Time.svelte'
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import DisplayPrice from './DisplayPrice.svelte'
    import CalcStartOption from "./CalcStartOption.svelte";

    let device = $state()
</script>


<UsageDuration/>
<DeviceSwitcher bind:device/>
<CalcStartOption/>
<DisplayPrice/>


