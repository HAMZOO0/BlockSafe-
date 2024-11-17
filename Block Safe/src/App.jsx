import { useState } from "react";
import "./index.css"; // Tailwind should be imported last
import { create } from "ipfs-http-client";
import { Buffer } from "buffer"; // Import the Buffer polyfill
import axios from "axios";

// Example usage
function App() {
  const [file, setfile] = useState("");

  // Form submission handler
  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(file);

    try {
      const file_Data = new FormData();
      file_Data.append("file", file);
      const res = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: file_Data,
        headers: {
          pinataApiKey: import.meta.env.VITE_API_KEY,
          pinata_secret_api_key: import.meta.VITE_PINATA_SECRET,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {}
  };

  return (
    <div className="text-cyan-500 flex items-center justify-center w-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
      >
        <label>
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
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
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => setfile(e.target.files[0])} // Attach file upload handler
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
