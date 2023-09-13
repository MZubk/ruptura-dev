import { Link } from "react-router-dom";
import DefaultButton from "../DefaultButton";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="text-center w-72 bg-gradient-to-b from-blue-950 from-40% to-zinc-950 shadow-md border-0 rounded-md pb-6 hover:shadow-neutral-500 hover:delay-100 hover:-translate-y-1">
        <img
          className="w-full"
          src={`/public/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className="text-xl font-mono text-teal-400 my-6">{post.titulo}</h2>
        <DefaultButton>Ler</DefaultButton>
      </div>
    </Link>
  );
}
