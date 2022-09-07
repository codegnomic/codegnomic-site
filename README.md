# Sveltekit + Appwrite demo

Auth + API demo.

### Issuses I faced
- PROBLEM. Cookie that was stored in localstorage was not re-read by sveltekit upon browser refersh.
- SOLUTION. In +layout.svelte file, used the onMount lifecycle hook to make a function call that will use the stored cookie to retrieve the current session.
- PROBLEM. PageTransition wasn't able to do the fly out animation upon page change. Was using the reactive $page object fetch current path.
- SOLUTION. Created a load function in +layout.js where the path could be passed down to the layout as a prop. This allowed the out animation to play before the rendering of the new page.

