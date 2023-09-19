import PostCard from "components/PostCard";

import posts from "json/posts.json";

export default function Home() {
  return (
    <ul className="flex flex-wrap pt-0 px-6 -mt-4 pb-12 justify-center gap-6">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
