<script>
// import axios from "axios"
// import { onMount } from "svelte"
import Header from "./componants/Header.svelte"
import Navbar from "./componants/Navbar.svelte"
import Pagination from "./componants/pagination.svelte"

// export let Token
// console.log("token", Token)

// onMount(async () => {
//   const { data } = await axios.get(
//     "https://test.swagger.print2block.in/account/usage?from=2022-01-01T00%3A00%3A00Z&to=2022-11-15T00%3A00%3A00Z"
//   )
//   console.log("data", data)
// })
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 space-y-5 px-5 py-5 lg:w-5/6">
      <div>
        <div class="mb-3 text-xl">Dashboard</div>
        <div class="flex space-x-5">
          <div
            class="my-auto w-1/3 rounded-md bg-white/10 py-5 text-center shadow-sm shadow-red-600">
            <div
              class="flex flex-row items-center justify-center gap-2 text-xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-yellow-600">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>Documents Issued</div>
            </div>
            <div class="mx-auto text-3xl text-yellow-600">1000</div>
          </div>
          <div
            class="my-auto w-1/3 rounded-md bg-white/10 py-5 text-center shadow-sm shadow-red-600">
            <div
              class="flex flex-row items-center justify-center gap-2 text-xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-blue-600">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>Documents Viewed</div>
            </div>
            <div class="mx-auto text-3xl text-blue-600">450</div>
          </div>
          <div
            class="my-auto w-1/3 rounded-md bg-white/10 py-5 text-center shadow-sm shadow-red-600">
            <div
              class="flex flex-row items-center justify-center gap-2 text-xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-green-600">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>Documents Verified</div>
            </div>
            <div class="mx-auto text-3xl text-green-600">70</div>
          </div>
        </div>
      </div>
      <div>
        <div class="mb-3 text-xl">Documents</div>
      </div>
    </div>
  </div>
</div>
