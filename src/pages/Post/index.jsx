import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ModelPost from "components/ModelPost";
import NotFound from "../NotFound";

import posts from "json/posts.json";
import "./post.css";
import DefaultPage from "../../components/DefaultPage";

export default function Post() {
  const parameter = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameter.id);
  });

  if (!post) {
    return <NotFound />;
  }

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
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
}
