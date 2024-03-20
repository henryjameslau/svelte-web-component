<svelte:options customElement="proto-chart"/>
<script>
    import { onMount } from "svelte"
    import {csv} from "d3-fetch";
    export let dataurl;
    export let configurl;

    let data, config
    
    onMount(async () =>{
        data = await csv(dataurl)
        const res = await fetch(configurl)
        
        config = eval(await res.text())
    })


</script>
<h1>Data from a url</h1>
{#if data}
{JSON.stringify(data)}
{/if}
<h1>Config.json</h1>
<p>{JSON.stringify(config)}</p>