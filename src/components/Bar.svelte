<script lang="ts">
    export let time: String;
    export let price: Number;
</script>

<div class="bar-container">
    <div class="box" style="height: {price * 1}em;"></div>
    <p>{time}</p>
</div>

<style>

    .bar-container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-end;
        width: 1em;
    }

    .box {
        width: 100%;
        background-color: #ddd;
        border-radius: 0.5em;
    }

    p {
        font-size: 0.8em;
        margin-top: 0.5em;
    }
</style>
