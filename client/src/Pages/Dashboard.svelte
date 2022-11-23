<script>
import Header from "./componants/Header.svelte"
import Navbar from "./componants/Navbar.svelte"

export let Token
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <div class="mb-3 text-xl">Dashboard</div>
    </div>
  </div>
</div>
