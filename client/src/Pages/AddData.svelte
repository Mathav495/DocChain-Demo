<script>
  import Header from "../componants/header.svelte"
  import Navbar from "../componants/Navbar.svelte"
  export let document
  let filename
  console.log(document)
  const submitfile = () => {
    console.log(filename)
  }
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <h1 class="mb-3 text-xl">Add Data page</h1>
      <div>
        <input bind:value={filename} type="file" class="dropify" />
        <button on:click={submitfile}>Upload</button>
      </div>
    </div>
  </div>
</div>
