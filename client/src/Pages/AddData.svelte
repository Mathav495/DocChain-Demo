<script>
  import Header from "../componants/header.svelte"
  import Navbar from "../componants/Navbar.svelte"
  import DropZone from "svelte-atoms/DropZone.svelte"
  import axios from "axios"
  export let documentType
  let fileName
  let element = document.getElementById("Load")
  element.classList.add("hidden")
  console.log(documentType)
  // const onChange = (e) => {
  //   const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]
  //   fileName = file ? file.name : ""
  //   console.log(fileName)
  //   let sampleData = {
  //     filename: fileName,
  //   }
  //   const { data } = axios.post(
  //     "http://localhost:5000/docs/initiate",
  //     sampleData
  //   )
  //   console.log(data)
  // }
  // const submitdata = () => {
  //   console.log(fileName)

  //   const userimage = document.querySelector("#userimage")
  //   userimage.addEventListener("change", () => {
  //     const reader = new FileReader()
  //     let newimage = reader.result
  //     reader.addEventListener("load", () => {
  //       document.querySelector(
  //         "#displayimage"
  //       ).style.backgroundImage = `url(${newimage})`
  //     })
  //     reader.readAsDataURL(this.files[0])
  //   })
  // }

  const submitdata = async () => {
    console.log(fileName)
    const form = document.getElementById("form")
    const formData = new FormData(form)
    console.log([...formData])
    let datum = [...formData][0]
    let File = datum[1]
    console.log(File)
    let sampleData = {
      name: File.name,
      size: File.size,
      type: File.type,
    }
    const { data } = await axios.post(
      "http://localhost:5000/docs/initiate",
      sampleData
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
      <!-- <div class="border border-slate-200">
        <DropZone
          fileTitle={fileName}
          dropOnPage
          on:drop={onChange}
          on:change={onChange} />
      </div> -->
      <form
        on:submit|preventDefault={submitdata}
        id="form"
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
