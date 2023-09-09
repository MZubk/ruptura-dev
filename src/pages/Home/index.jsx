import Banner from "components/Banner";
import Post from "components/Post";

import posts from "json/posts.json";
import Footer from "components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <ul className="flex flex-wrap pt-0 px-6 -mt-4 pb-12 justify-center gap-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
