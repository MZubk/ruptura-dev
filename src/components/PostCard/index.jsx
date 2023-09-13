import { Link } from "react-router-dom";
import DefaultButton from "../DefaultButton";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="text-center w-72 bg-slate-200 shadow-md border-0 rounded-md pb-6 hover:shadow-neutral-500 hover:delay-100 hover:-translate-y-4">
        <img
          className="w-full"
          src={`/public/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className="text-xl text-blue-500 my-6">{post.titulo}</h2>
        <DefaultButton>Ler</DefaultButton>
      </div>
    </Link>
  );
}
