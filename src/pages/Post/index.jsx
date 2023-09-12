import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ModelPost from "components/ModelPost";
import posts from "json/posts.json";
import "./post.css";

export default function Post() {
  const parameter = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameter.id);
  });

  if (!post) {
    return <h1 className="title h-screen">Post não encontrado...</h1>;
  }

  return (
    <ModelPost
      coverPhoto={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </ModelPost>
  );
}
