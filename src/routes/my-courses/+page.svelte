<script>
    import { goto } from "$app/navigation"
    import { state } from "$lib/store"
    import { onMount } from "svelte";

    onMount(() => {
        if(!$state.account) {
            goto('/login')
        }
    })
</script>

<h1>My Courses</h1>
