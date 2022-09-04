<script>
    import { state } from "$lib/store"
    import { setContext } from "svelte"

    setContext("user", $state.account)
    console.log($state.account)
</script>

<nav>
    <a href="/">Home</a>
    <a href="/courses">Courses</a>
    {#if $state.account}
        <a href="/" on:click={state.logout}>Logout</a>
    {:else}
        <a href="/login">Login</a>
    {/if}
</nav>
<slot />
