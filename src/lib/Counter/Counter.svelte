<svelte:options customElement="count-er"/>

<script>
    /** Default value of the counter. */
    export let value = 0;

</script>

<div class="counter">
    <button on:click={() => value--}>
        -
    </button>
    <span>
        {value}
    </span>
    <button on:click={() => value++}>
        +
    </button>
</div>

<style>
    .counter {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    border-radius: 4px;
    color: grey;
    background-color: #f6fafd;
    border: 1px solid #dae2e7;
    border-block-end-color: hsl(205, 22%, 68%);
}

span {
    border-inline: 1px solid #dae2e7;
    padding-inline: 12px;
    margin-inline: 4px;
}

button {
    inline-size: 32px;
    block-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: transparent;
    transition: 150ms ease all;
    color: #444;
    font: inherit;
    cursor: pointer;
    border: none;
    outline: none;
}

button:hover {
    background-color: #e6f1f9;
}

button:focus {
    box-shadow: 0 0 0 3px rgba(255, 62, 0, 0.25);
}
</style>