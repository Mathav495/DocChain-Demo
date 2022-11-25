<script>
  import LoginPage from './Pages/Loginpage.svelte';
  import Dashboard from './Pages/Dashboard.svelte';
  import { Route, Router } from 'svelte-routing';
  import Publishdoc from './Pages/Publishdoc.svelte';
  import AddData from './Pages/AddData.svelte';
  import Preview from './Pages/preview.svelte';
  import Blockchain from './Pages/blockchain.svelte';

  export let url = '';
</script>

<Router {url}>
  <main>
    <Route path="/"><LoginPage /></Route>
    <Route path="/Dash"><Dashboard /></Route>
    <Route path="/Publish"><Publishdoc /></Route>
    <Route path="/user/:document" let:params>
      <AddData document={params.document} />
      <Preview document={params.document} />
    </Route>
    <Route path="/Block"><Blockchain /></Route>
  </main>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
