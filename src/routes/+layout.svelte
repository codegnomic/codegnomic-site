<script>
    import { state } from "$lib/store";
</script>
<nav>
    <a href="/">Home</a>
    <a href="/courses">Courses</a>
    {#if $state.account}
        <button on:click={state.logout}>Logout</button>
    {:else}
        <a href="/login">Login</a>
    {/if}
</nav>
<slot></slot>
