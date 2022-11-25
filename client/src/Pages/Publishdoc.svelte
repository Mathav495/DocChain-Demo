<script>
  import { navigate } from "svelte-routing"
  import Header from "../componants/header.svelte"
  import Navbar from "../componants/Navbar.svelte"
  let document
  const onsubmit = () => {
    console.log(document)
    if (document) {
      navigate(`/user/${document}`)
    }
  }
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />

  <div class="mx-5 flex">
    <Navbar />
    <div class="mt-2">
      <h1 class="mt-2 text-2xl font-normal text-slate-400">Publish Document</h1>
      <h1 class="mt-1 text-lg font-normal text-slate-400">
        <span class="text-blue-500">Dashboard</span> / Publish Document
      </h1>
    </div>
    <div class="ml-auto">
      <button
        class=" mt-5 rounded bg-indigo-500 px-2 py-1 text-lg text-white hover:bg-indigo-600"
        >Add Document Type</button>
      <button
        class=" mt-5 rounded bg-green-500 px-2 py-1 text-lg text-white hover:bg-green-600"
        >Edit Document Type</button>
      <button
        class=" mt-5 rounded bg-yellow-500 px-2 py-1 text-lg text-white hover:bg-yellow-600"
        >Edit Recievers</button>
    </div>
  </div>
</div>
