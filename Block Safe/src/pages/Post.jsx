import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../service/dbConfig";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { title } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.user);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  // Logging post content (check if post is null or undefined)
  useEffect(() => {
    if (post) {
      console.log("content", post.title);
    }
  }, [post]);

  useEffect(() => {
    if (title) {
      service.getPost(title).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/"); // If post not found, navigate to homepage
        }
      });
    } else {
      navigate("/"); // If no slug, navigate to homepage
    }
  }, [title, navigate]);

  const deletePost = () => {
    if (post && post.$id) {
      service.deletePost(post.title).then((status) => {
        if (status) {
          service.deleteFile(post.featuredImg); // Delete associated file
          navigate("/"); // Navigate to homepage after deletion
        }
      });
    }
  };

  if (!post || !post.title) {
    // If post or content is missing, return loading or a fallback UI
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={service.getFilePreview(post.featuredImg)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        {/* Ensure content is not empty before rendering */}
        {post.content ? (
          <div className="browser-css">{parse(post.content)}</div>
        ) : (
          <div>No content available.</div>
        )}
      </Container>
    </div>
  );
}
