<script>
  import axios from "axios"
  import { navigate } from "svelte-routing"
  let Email = "",
    password = ""
  let error = {
    Email: "",
    password: "",
  }
  let valid = false
  const onLogin = async () => {
    console.log(Email)
    console.log(password)
    valid = true
    const mail = /\S+@\S+\.\S+/g
    const result1 = mail.test(Email)
    if (Email == "") {
      error.Email = "Email can't be empty"
      valid = false
    } else if (!result1) {
      error.Email = "Please Enter valid mail id"
      valid = false
    } else {
      error.Email = ""
    }
    if (password == "") {
      error.password = "password can't be empty"
      valid = false
    } else {
      error.password = ""
    }

    if (valid) {
      let sampleData = {
        email: Email,
        password: password,
      }
      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        sampleData
      )
      console.log(data)
      localStorage.setItem("token", data.token)
      let token = localStorage.getItem("token")
      console.log(token)
      if (token) {
        navigate("/Dash")
      }
    }
</script>

<div class=" flex h-screen w-screen items-center justify-center bg-black">
  <div class="mx-5 flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
    <!-- title -->

    <div class="flex items-center justify-center">
      <img
        src="\assets\icon1.png"
        class=" mr-2 inline-block animate-pulse align-top "
        width="30"
        height="30"
        alt="" />
      <h1 class="text-2xl font-medium text-white">DocChain</h1>
    </div>

    <!-- card -->

    <div class="rounded-lg bg-red-600 p-2 shadow-sm shadow-white">
      <h1
        class="flex justify-center pt-4 pb-2 text-2xl font-normal text-gray-300">
        Login to your account
      </h1>
      <div class="flex flex-col gap-5 p-5">
        <input
          bind:value={Email}
          type="email"
          placeholder="Email address"
          class="w-full rounded-full border  border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700  outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        <h1 class="pl-3 text-sm font-semibold text-black md:text-base">
          {error.Email}
        </h1>
        <input
          bind:value={password}
          type="password"
          placeholder="Password"
          class="w-full rounded-full  border  border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        <h1 class="pl-3 text-sm font-semibold text-black md:text-base">
          {error.password}
        </h1>

        <button
          on:click={onLogin}
          class="rounded-l-full rounded-r-full border-0 bg-indigo-500 py-2 px-6 text-lg text-gray-300 hover:bg-indigo-600 focus:outline-none"
          >LOGIN</button>
      </div>
      <h1
        class="flex  cursor-pointer items-center justify-center gap-2 text-base font-medium text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="h-5 w-5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>

        Forgot Password?
      </h1>

      <h1
        class="flex  cursor-pointer items-center justify-center gap-2 pt-3 text-base font-medium">
        Don't have an account? <span class="text-blue-600">contact-us</span>
      </h1>
    </div>
  </div>
</div>
