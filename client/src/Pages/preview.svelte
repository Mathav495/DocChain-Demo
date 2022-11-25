<script>
  import Header from "../componants/header.svelte";
  import Navbar from "../componants/Navbar.svelte";
  import axios from "axios";
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  let documentID, signature, filehash;
  // disabled = false,
  error = "";

  let Token = localStorage.getItem("token");
  console.log("token", Token);

  const publishdoc = async () => {
    if (signature == "") {
      error = "signature can't be empty";
      console.log(error);
    } else {
      const sample = {
        documentID: documentID,
        signature: signature,
      };
      const { data } = await axios.post(
        "http://localhost:5000/docs/publish",
        sample
      );
      console.log(data);

      let getData = {
        docID: data.documentID,
        sign: data.signature,
        filehash: data.filehash,
      };
      localStorage.setItem("dataKey", JSON.stringify(getData));
      let doc = localStorage.getItem("dataKey");
      console.log(doc);

      dispatch("push", data);
    }
  };
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <div class="mt-10 flex">
        <div class=" mx-auto flex items-center p-5 md:flex-row">
          <div class="overflow-x-auto">
            <table class="text-md w-full text-left text-gray-500 ">
              <thead
                class="text-md bg-gray-50 uppercase text-gray-700 hover:bg-gray-200 "
              >
                <tr>
                  <th scope="col" class="w-80 py-3 px-6"> Name </th>
                  <th scope="col" class="w-32 py-3 px-6"> : </th>
                  <th scope="col" class="w-80 py-3 px-6 "> John </th>
                </tr>
              </thead>
              <thead
                class="text-md bg-gray-50 uppercase text-gray-700 hover:bg-gray-200 "
              >
                <tr>
                  <th scope="col" class="w-80 py-3 px-6"> Type </th>
                  <th scope="col" class="w-32 py-3 px-6"> : </th>

                  <th scope="col" class="w-80 py-3 px-6 "> Sample </th>
                </tr>
              </thead>
            </table>
            <img
              src="https://dummyimage.com/300x400"
              alt="document"
              class="mx-auto mt-10 h-auto w-auto items-center justify-center rounded-md"
            />
            <div
              class="mx-auto mt-10 flex-col items-center justify-center text-center"
            >
              <label
                for="signature"
                class="text-md block font-medium text-gray-500 "
                >signature</label
              >
              <div class="mt-1">
                <textarea
                  bind:value={signature}
                  id="signature"
                  name="signature"
                  rows="3"
                  class=" mt-5 w-full rounded-md border-2 border-gray-200 border-gray-300 px-4 py-2 shadow-lg shadow-sm placeholder:text-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="ECDSA Signature obtained"
                />
              </div>
            </div>
            <!-- <h1 class="text-md font-semibold text-rose-500">{error}</h1> -->

            <div class="mx-auto mt-10 flex justify-between">
              <button
                class="rounded-lg bg-teal-500 px-6 py-2 text-lg text-white"
                >sign</button
              >
              <button
                href="/blockchain"
                on:click={publishdoc}
                class="rounded-lg bg-teal-500 px-6 py-2 text-lg text-white disabled:cursor-not-allowed disabled:bg-teal-200"
                >publish to blockchain</button
              >

              <a
                class="rounded-lg bg-teal-500 px-6 py-2 text-lg text-white "
                href="/">revoke</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
