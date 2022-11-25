<script>
  import Header from "../componants/header.svelte"
  import Navbar from "../componants/Navbar.svelte"
  import axios from "axios"
  export let documentType
  let fileName
  let element = document.getElementById("Load")
  element.classList.add("hidden")
  console.log(documentType)

  const submitdata = async () => {
    console.log(fileName)
    const form = document.getElementById("form")
    const formData = new FormData(form)
    const { data } = await axios.post(
      "http://localhost:5000/docs/initiate",
      formData
    )
    console.log(data)
    localStorage.setItem("documentID", data.documentID)
    let DocumentID = localStorage.getItem("documentID")
    console.log(DocumentID)
  }
</script>

<div class="h-screen w-screen bg-black text-gray-300">
  <Header />
  <div class="flex flex-row">
    <Navbar />
    <div class="w-3/4 px-5 py-5 lg:w-5/6">
      <form
        on:submit|preventDefault={submitdata}
        id="form"
        method="post"
        action="/docs/initiate"
        enctype="multipart/form-data">
        <input
          bind:value={fileName}
          type="file"
          name="userimage"
          accept="image/*,.pdf" />
        <button>Upload</button>
      </form>
    </div>
  </div>
</div>
