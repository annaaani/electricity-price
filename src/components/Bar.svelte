<script lang="ts">
    export let time: string
    export let price: number
    // TODO: negative price
</script>

<div class="bar-container">
    <p>{time}</p>
    <div class="box" style="height:{price}em;"></div>
    <p class="price"> {price} c/KWh </p>
</div>

<style>
    .bar-container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-end;
        width: 1em;
        position: relative;
        margin-top: 2em;
    }

    .box {
        width: 100%;
        background-color: #ddd;
        border-radius: 0.5em;
        transition: background-color 0.3s ease;
    }

    .box:hover {
        background-color: #ccc;
    }

    p.price {
        font-size: 0.8em;
        margin-top: 0.5em;
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        bottom: 100%;
        padding-bottom: 5px;
    }

    .bar-container:hover .price {
        opacity: 1;
        z-index: 1;
    }

</style>
