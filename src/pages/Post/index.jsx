import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ModelPost from "components/ModelPost";
import NotFound from "../NotFound";

import posts from "json/posts.json";
import "./post.css";
import DefaultPage from "components/DefaultPage";
import PostCard from "../../components/PostCard";

export default function Post() {
  const parameter = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameter.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const featuredPosts = posts
    .filter((post) => post.id !== Number(parameter.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <ModelPost
              coverPhoto={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <div>
                <h3 className="pt-4 pb-8 text-4xl">
                  Você também pode gostar...
                </h3>
                <ul className="flex gap-6 justify-center flex-wrap">
                  {featuredPosts.map((post) => (
                    <li key={post.id}>
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              </div>
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
}
