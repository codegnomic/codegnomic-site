<script>
    import PageTransition from "$lib/components/PageTransition.svelte"
    import { state } from "$lib/store"
    import { onMount } from "svelte"
    export let data

    onMount(() => {
        if (!$state.account) {
            state.getUser()
            return
        }
    })
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

<PageTransition refresh={data.url}>
    <slot />
</PageTransition>
