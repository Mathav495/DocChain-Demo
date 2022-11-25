<script>
  import { navigate } from "svelte-routing"
  import Header from "../componants/header.svelte"
  import Navbar from "../componants/Navbar.svelte"
  let element = document.getElementById("Load")
  element.classList.add("hidden")
  let documentType
  const onsubmit = () => {
    console.log(documentType)
    if (documentType) {
      navigate(`/user/${documentType}`)
    }
  }
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />

  <div class="mx-5 flex">
    <Navbar />
    <div class="flex w-full flex-col pl-10">
      <div class="flex">
        <div class="mt-2 flex-1">
          <h1 class="mt-2 text-2xl font-normal text-slate-400">
            Publish Document
          </h1>
          <h1 class="mt-1 text-lg font-normal text-slate-400">
            <a href="/Dash" class="cursor-pointer text-blue-500 ">Dashboard</a> /
            Publish Document
          </h1>
        </div>
      </div>

      <div
        class="mt-8 w-full rounded-lg bg-white/10 p-5 shadow-sm shadow-red-600">
        <h1 class="text-xl text-slate-400">Choose the document to proceed</h1>
        <div class="mt-4 flex  gap-5">
          <input
            type="text"
            class="w-96 rounded border border-gray-300 bg-black bg-opacity-50 px-2 text-lg leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200" />
          <button
            class=" flex rounded border-0 bg-red-500 py-1 px-10 text-lg text-white hover:bg-red-600 focus:outline-none"
            >Proceed</button>
        </div>
      </div>
    </div>
  </div>
</div>
