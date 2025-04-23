import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, []);

  return (
    <>
      <h1>FetchDataEffect</h1>
      {posts
        .filter((post) => post.id === 1)
        .map((post) => (
          <h2 key={post.id}>Title of the first post: {post.title}</h2>
        ))}
    </>
  );
};

export default FetchDataEffect;
