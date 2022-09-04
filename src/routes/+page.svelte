<script>
    import { getContext, hasContext } from "svelte"

    const user = getContext("user")
    if (user) console.log(user)
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
