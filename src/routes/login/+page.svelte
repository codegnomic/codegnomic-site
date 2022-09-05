<script lang="ts">
    import { state } from "@lib/store"
    import { goto } from "$app/navigation"
    import { onMount, beforeUpdate } from "svelte"

    let email: string,
        password: string = ""

    beforeUpdate(() => {
        if ($state.account) goto("/")
    })

    const login = async () => {
        if (!checkform) {
            return
        }
        try {
            await state.login(email, password)
            goto("/")
        } catch (error) {
            console.log(error)
        }
    }

    $: checkform = email !== "" && password !== ""
</script>

<form on:submit|preventDefault={login}>
    <input type="email" id="email" bind:value={email} />
    <input type="password" id="password" bind:value={password} />
    <button type="submit" disabled={!checkform}>Login</button>
</form>
