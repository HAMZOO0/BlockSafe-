import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Services } from "../../service/dbConfig"; // Import your services class

const services = new Services(); // Initialize Appwrite services

export default function PostForm({ post }) {
  const [file, setfile] = useState(null); // State to handle file
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user); // Assuming you're using Redux for user data

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
    },
  });

  // Form submission handler
  const submit = async (data) => {
    let fileId = null;
    let fileUrl = null;

    // Upload file to Pinata if available
    if (file) {
      const file_Data = new FormData();
      file_Data.append("file", file);
      try {
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          file_Data,
          {
            headers: {
              pinata_api_key: import.meta.env.VITE_API_KEY,
              pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        fileUrl = "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash; // Getting file URL
        console.log("File uploaded to:", fileUrl);
        fileId = res.data.IpfsHash; // Saving the CID
      } catch (error) {
        console.error(
          "Error uploading file:",
          error.response?.data || error.message
        );
      }
    }

    // Handling Post creation or update in Appwrite
    if (post) {
      // Optionally delete old file if you're updating
      const updatedPost = await services.updatePost(post.$id, {
        ...data,
        cid: fileId,
        fileUrl, // Store file URL in the post
      });
      navigate(`/post/${updatedPost.$id}`);
    } else {
      const createdPost = await services.createPost({
        ...data,
        userId: userData.$id,
        cid: fileId,
        fileUrl, // Storing file URL in the new post
      });
      navigate(`/post/${createdPost.$id}`);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe(); // Cleanup
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-full px-2">
        {/* Title Input */}
        <input
          {...register("title", { required: true })}
          className="mb-4 p-2 border"
          placeholder="Enter the title"
        />

        {/* Slug Input */}
        <input
          {...register("slug", { required: true })}
          className="mb-4 p-2 border"
          placeholder="Generated slug"
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        {/* Featured Image (File Upload) */}
        <input
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("featuredImg")}
          onChange={(e) => setfile(e.target.files[0])} // Attach file upload handler
        />

        {/* Show existing image if available */}
        {post && post.featuredImg && (
          <div className="w-full mb-4">
            <img
              src={services.getFilePreview(post.featuredImg)} // Your service to preview the file
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded"
        >
          {post ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  );
}
