<script>
import { createEventDispatcher } from "svelte"
const dispatch = createEventDispatcher()
import Header from "../componants/header.svelte"
import Navbar from "../componants/Navbar.svelte"
let document
const onsubmit = () => {
  console.log(document)
  dispatch("document", document)
}
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <h1 class="mb-3 text-xl">Publish Documents</h1>
      <div>
        <label for="Doc" class="text-lg text-white"
          >Choose the document to proceed</label>
        <div class="mt-4 flex gap-5">
          <input
            bind:value={document}
            type="text"
            id="Doc"
            class="w-2/5 text-lg text-slate-400" />
          <button on:click={onsubmit} class="bg-red-500 p-1 text-white"
            >Proceed</button>
        </div>
      </div>
    </div>
  </div>
</div>
