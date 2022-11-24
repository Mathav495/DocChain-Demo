<script>
  import LoginPage from "./Pages/Loginpage.svelte";
  import Dashboard from "./Pages/Dashboard.svelte";
  import { Route, Router } from "svelte-routing";
  import Publishdoc from "./Pages/Publishdoc.svelte";
  export const url = "";
  let Token;
  const getToken = (e) => {
    Token = e.detail;
    console.log(Token);
  };
</script>

<Router {url}>
  <main>
    <Route path="/"><LoginPage on:token={getToken} /></Route>
    <Route path="Dash"><Dashboard {Token} /></Route>
    <Route path="Publish"><Publishdoc /></Route>
  </main>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
