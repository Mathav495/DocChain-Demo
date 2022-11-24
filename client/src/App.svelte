<script>
import LoginPage from "./Pages/LoginPage.svelte"
import Dashboard from "./Pages/Dashboard.svelte"
import { Route, Router } from "svelte-routing"
import Publishdoc from "./Pages/Publishdoc.svelte"
import AddData from "./Pages/AddData.svelte";
export const url = ""
let Token, documentType
const getToken = (e) => {
  Token = e.detail
  console.log(Token)
}
const getDocumentType = (e) => {
  documentType = e.detail
  console.log(documentType)
}
</script>

<Router {url}>
  <main>
    <Route path="/"><LoginPage on:token={getToken} /></Route>
    <Route path="Dash"><Dashboard {Token} /></Route>
    <Route path="Publish"><Publishdoc on:document={getDocumentType}/></Route>
    <Route path="/user">
      <AddData/>
    </Route>
  </main>
</Router>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
