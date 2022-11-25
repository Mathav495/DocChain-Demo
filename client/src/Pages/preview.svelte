<script>
  import Header from '../componants/header.svelte';
  import Navbar from '../componants/Navbar.svelte';
  import axios from 'axios';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  let documentID,
    signature,
    file,
    error = '';
  // disabled = false,;

  let Token = localStorage.getItem('token');
  console.log('token', Token);
  let fileHash = localStorage.getItem('filehash');
  console.log('filehash', fileHash);
  let dataHash = localStorage.getItem('datahash');
  console.log('datahash', dataHash);

  // /**
  //  * function to generate 6 digits otp
  //  */
  // const generateOTP = () => {
  //   // Declare a digits variable
  //   // which stores all digits
  //   var digits = '0123456789';
  //   let OTP = '';
  //   for (let i = 0; i < 6; i++) {
  //     OTP += digits[Math.floor(Math.random() * 10)];
  //   }
  //   return OTP;
  // };
  // document.write('OTP of 6 digits: ');
  // document.write(generateOTP());
  // console.log(generateOTP());

  // let URL = 'http://localhost:5000/sign/publish';

  // publishing documents
  const publishdoc = async () => {
    if (signature == null) {
      error = "signature can't be empty";
      console.log(error);
    } else {
      const sample = {
        documentID: documentID,
        signature: signature,
      };
      const { data } = await axios.post('http://localhost:5000/docs/publish', sample);
      console.log(data);

      let getData = {
        docID: data.documentID,
        sign: data.signature,
        // filehash: data.filehash,
      };
      localStorage.setItem('dataKey', JSON.stringify(getData));
      let doc = localStorage.getItem('dataKey');
      console.log(doc);

      dispatch('push', data);
    }
  };
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <div class="flex overflow-hidden">
        <div class="flex w-full items-center justify-center bg-black p-5 md:flex-row">
          <div class="overflow-x-auto">
            <table class="text-md w-full text-left text-gray-500 dark:text-gray-400">
              <thead class="text-md bg-gray-50 uppercase text-gray-700 hover:bg-gray-200 dark:text-gray-400">
                <tr>
                  <th scope="col" class="w-80 py-3 px-6"> Name </th>
                  <th scope="col" class="w-32 py-3 px-6"> : </th>

                  <th scope="col" class="w-80 py-3 px-6 "> John </th>
                </tr>
              </thead>
              <thead class="text-md bg-gray-50 uppercase text-gray-700 hover:bg-gray-200 dark:text-gray-400">
                <tr>
                  <th scope="col" class="w-80 py-3 px-6"> Type </th>
                  <th scope="col" class="w-32 py-3 px-6"> : </th>

                  <th scope="col" class="w-80 py-3 px-6 "> Sample </th>
                </tr>
              </thead>
            </table>

            <img src="/assets/images/certificate1.jpeg" alt="document" class="mx-auto mt-10 h-[300px] w-[400px] items-center justify-center rounded-lg object-cover shadow-md" />

            <div class="mx-auto mt-10 flex-col items-center justify-center text-center">
              <label for="signature" class="text-md block font-medium text-gray-200 ">signature</label>
              <div class="mt-1">
                <textarea bind:value={signature} name="signature" rows="3" class=" mt-5 w-full rounded-md border-2 border-gray-200 border-gray-300 px-4 py-2 shadow-lg shadow-sm placeholder:text-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="ECDSA Signature obtained" />
              </div>
            </div>
            <h1 class="text-md font-semibold text-rose-500">{error}</h1>

            <div class="mx-auto mt-10 flex justify-between">
              <button class="rounded-lg bg-teal-500 px-6 py-2 text-lg text-white">sign</button>
              <button on:click={publishdoc} class="rounded-lg bg-teal-500 px-6 py-2 text-lg text-white disabled:cursor-not-allowed disabled:bg-teal-200">publish to blockchain</button>

              <button class="rounded-lg bg-teal-500 px-6 py-2 text-lg text-white ">revoke</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
