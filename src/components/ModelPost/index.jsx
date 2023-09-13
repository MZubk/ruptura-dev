import { useNavigate } from "react-router-dom";
import DefaultButton from "../DefaultButton";

export default function ModelPost({ coverPhoto, title, children }) {
  const navigate = useNavigate();

  return (
    <>
      <article className="relative text-slate-900">
        <div
          className="h-56 w-full bg-cover bg-no-repeat opacity-30 absolute top-0 -z-1"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        ></div>

        <h2 className="title">{title}</h2>

        <div className="px-28 py-10">{children}</div>
      </article>
      <div className="text-start m-14 p-8" onClick={() => navigate(-1)}>
        <DefaultButton>Voltar</DefaultButton>
      </div>
    </>
  );
}
