<!-- Main modal -->
<div
  class=" mx-auto flex h-auto w-full justify-center overflow-hidden p-4 md:inset-0 md:h-full"
>
  <div class="relative h-full w-full max-w-2xl md:h-auto ">
    <!-- Modal content -->
    <div class="relative h-full w-full max-w-2xl md:h-auto">
      <div class="relative rounded-lg bg-white/30 shadow dark:bg-gray-700 ">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between rounded-t border-b bg-slate-100 p-4 dark:border-gray-600"
        >
          <h3 class="text-2xl font-semibold text-gray-600 dark:text-white">
            Sign Document:
          </h3>
          <button
            type="button"
            class="ml-auto inline-flex items-center rounded-lg bg-gray-200 p-1.5 text-sm text-gray-900 hover:bg-red-600 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
            >
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="space-y-6 p-6">
          <p
            class="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400"
          >
            Enter the Signature ID you've received in your <strong>
              E-Mail</strong
            >
          </p>
          <input
            class="w-full rounded-lg border-2 px-4 py-2 placeholder:text-gray-400"
            placeholder="SignatureID"
            type="text"
            name="Signature"
            id="sign"
          />
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center justify-center space-x-2 rounded-b border-t border-gray-200 bg-slate-100 p-6 dark:border-gray-600"
        >
          <button
            data-modal-toggle="defaultModal"
            type="button"
            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Confirm Sign</button
          >
          <button
            data-modal-toggle="defaultModal"
            type="button"
            class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            >Resend Sign</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
