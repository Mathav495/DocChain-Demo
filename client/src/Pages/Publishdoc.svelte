<script>
import { createEventDispatcher } from "svelte"
const dispatch = createEventDispatcher()
import Header from "./componants/Header.svelte"
import Navbar from "./componants/Navbar.svelte"
let document
const onsubmit = () => { 
  console.log(document)
  dispatch("document",document)
}
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <h1 class="mb-3 text-xl">Publish Documents</h1>
      <div>
        <label for="Doc" class="text-lg text-white">Choose the document to proceed</label>
        <div class="flex mt-4 gap-5">
          <input 
          bind:value={document}
          type="text" id="Doc" class="w-2/5 text-slate-400 text-lg">
          <button on:click={onsubmit}
          class="bg-red-500 p-1 text-white">Proceed</button>
        </div>
      </div>
    </div>
  </div>
</div>
