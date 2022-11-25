<script>
import axios from "axios"
import { onMount } from "svelte"
import Header from "../componants/header.svelte"
import Navbar from "../componants/Navbar.svelte"
import Pagination from "../componants/pagination.svelte"

let element = document.getElementById("Load")
element.classList.remove("hidden")

let show = true
let Token = localStorage.getItem("token")
console.log("token", Token)

let usage = []
onMount(async () => {
  const { data } = await axios.get(
    "http://localhost:5000/account/usage?from=2022-01-01T00%3A00%3A00Z&to=2022-11-15T00%3A00%3A00Z"
  )
  usage = data
  console.log("data", usage)
  element.classList.add("hidden")
  let element2 = document.getElementById("Dashboard")
  element2.classList.remove("hidden")
  console.log(element)
})
</script>

<div class="hidden w-screen bg-black text-gray-300" id="Dashboard">
  <Header />
  <div class="flex flex-row">
    <div class="flex w-1/5 px-5 py-5 lg:w-1/6">
      {#if show}
        <Navbar />
      {/if}
    </div>
    <div class="w-4/5 space-y-5 px-5 py-5 lg:w-5/6">
      <div>
        <div class="mb-3 text-lg md:text-xl">Dashboard</div>
        <div class="flex space-x-2 md:space-x-5">
          <div
            class="my-auto w-1/3 rounded-md bg-white/10 py-5 text-center shadow-sm shadow-red-600">
            <div
              class="flex flex-row items-center justify-center gap-1 p-1 lg:gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-yellow-600 md:h-8 md:w-8 lg:h-10 lg:w-10">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div class="text-xs md:text-lg ">Documents Issued</div>
            </div>
            <div class="mx-auto text-xl text-yellow-600 md:text-3xl">
              {usage.initiated}
            </div>
          </div>
          <div
            class="my-auto w-1/3 rounded-md bg-white/10 py-5 text-center shadow-sm shadow-red-600">
            <div
              class="flex flex-row items-center justify-center gap-1 p-1 lg:gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-blue-600 md:h-8 md:w-8 lg:h-10 lg:w-10">
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
              <div class="text-xs md:text-lg">Documents Viewed</div>
            </div>
            <div class="mx-auto text-xl text-blue-600 md:text-3xl">
              {usage.published}
            </div>
          </div>
          <div
            class="my-auto w-1/3 rounded-md bg-white/10 py-5 text-center shadow-sm shadow-red-600">
            <div
              class="flex flex-row items-center justify-center gap-1 p-1 lg:gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-green-600 md:h-8 md:w-8 lg:h-10 lg:w-10">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="text-xs md:text-lg">Documents Verified</div>
            </div>
            <div class="mx-auto text-xl text-green-600 md:text-3xl">
              {usage.revoked}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mb-3 text-lg md:text-xl">Documents</div>
        <div
          class="flex h-44 w-full items-end justify-center rounded-md bg-white/10 shadow-sm shadow-red-600">
          <Pagination />
        </div>
      </div>
      <div>
        <div class="items-center justify-between md:flex">
          <div class="mb-3 text-lg md:text-xl">Documents Access Log</div>
          <div class="flex">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-l-md border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </div>
            <input
              class="mb-2 h-8 w-40 rounded-r-md border border-gray-500 bg-black px-2 outline-none md:mb-0 md:w-52" />
          </div>
        </div>
        <div
          class="flex w-full flex-col items-start justify-center gap-2 rounded-md bg-white/10 p-5 shadow-sm shadow-red-600">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <p class="text-xs hover:text-red-600 md:text-sm">ISSUE (0)</p>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <p class="text-xs hover:text-red-600 md:text-sm">VIEW (0)</p>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <p class="text-xs hover:text-red-600 md:text-sm">VERIFY (0)</p>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <p class="text-xs hover:text-red-600 md:text-sm">DOWNLOAD (0)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
