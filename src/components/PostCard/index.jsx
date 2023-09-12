import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="text-center w-72 bg-slate-200 shadow-md border-0 rounded-md pb-6 hover:shadow-neutral-500 hover:delay-100 hover:-translate-y-4">
        <img
          className="w-full"
          src={`/public/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className="text-xl text-blue-500 my-6">{post.titulo}</h2>
        <button className="text-xl text-slate-50 inline-block py-1 px-4 bg-slate-500 rounded-md inHover_text inHover_border">
          Ler
        </button>
      </div>
    </Link>
  );
}
