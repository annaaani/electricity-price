<script lang="ts">
    export let time: string
    export let price: number
    export let dailyMax: number
    // TODO: negative price
</script>

<div class="bar" style="height: {price / dailyMax * 100}%">
    <p class="hour">{time}</p>
    <p class="price">{price} c/kWh</p>
</div>

<style>
    .bar {
        width: 2.5%;
        background-color: #ddd;
        border-radius: 0.5em;
        transition: background-color 0.3s ease;
    }

    .hour {
        position: absolute;
        bottom: -3em;
    }

    .bar:hover {
        background-color: #ccc;
    }

    .price {
        font-size: 0.8em;
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        z-index: 10;
    }

    .bar:hover .price {
        opacity: 1;
        z-index: 10;
    }

</style>
