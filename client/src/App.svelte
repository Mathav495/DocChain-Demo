<script>
  import LoginPage from "./Pages/LoginPage.svelte"
  import Dashboard from "./Pages/Dashboard.svelte"
  import { Route, Router } from "svelte-routing"
  export const url = ""
</script>

<Router {url}>
  <main>
    <Route path="/"><LoginPage /></Route>
    <Route path="Dash"><Dashboard /></Route>
  </main>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
