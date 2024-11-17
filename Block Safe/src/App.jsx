import { useState } from "react";
import "./App.css";

function App() {
  const file_upload = (e) => {
    e.preventDefault();
    const file = e.target.files[0]; // Get the first selected file

    // Check if file is valid
    if (file) {
      const reader = new window.FileReader(); // Create a new FileReader instance

      reader.onload = () => {
        console.log("File Buffer:", reader.result); // Log the buffer data (ArrayBuffer)

        // Process for IPFS (or other logic) using reader.result
      };

      // Read the file as an ArrayBuffer (binary data)
      reader.readAsArrayBuffer(file);
    } else {
      console.error("No file selected or invalid file.");
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form");
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={onsubmit} // Attach the onSubmit handler here
          className="
            flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <label>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={file_upload} // Call file_upload when file is selected
            />
          </label>
          <button
            type="submit" // Use a button for submission
            className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
