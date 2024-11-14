<script>
    import UsageDuration from './UsageDuration.svelte'
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import DisplayPrice from './DisplayPrice.svelte'
    import CalcStartOption from "./CalcStartOption.svelte";
``
    let device = $state()

    $effect(() => {
        console.log(device)
    })
</script>


<UsageDuration/>
<DeviceSwitcher bind:device/>
<CalcStartOption/>
<DisplayPrice/>


