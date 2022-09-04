<script>
    import { goto } from "$app/navigation"

    import { getContext } from "svelte"

    const user = getContext("user")
    console.log("user? ")
    console.log(user)
    if (!user) goto("/login")
</script>

<h1>Courses</h1>
