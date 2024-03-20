<script>
    import "$lib/Counter/Counter.svelte"
    import "$lib/Scrolly/Scrolly.svelte"
    import "$lib/Protochart/Protochart.svelte"
</script>


<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<count-er></count-er>
<scroll-y></scroll-y>
<proto-chart dataurl="https://raw.githubusercontent.com/ONSvisual/Charts/main/bar-chart-horizontal/data.csv" configurl="https://raw.githubusercontent.com/ONSvisual/Charts/main/bar-chart-horizontal/config.js"></proto-chart>