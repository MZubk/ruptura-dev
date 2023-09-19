import { useNavigate } from "react-router-dom";
import DefaultButton from "components/DefaultButton";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen">
        <div className="relative text-center bg-zinc-500 text-emerald-950 py-0 pl-6 pr-24">
          <div className="">
            <span className="block text-slate-900 text-8xl font-serif font-bold mb-8">
              404
            </span>
            <h1 className="text-5xl mb-7">Ops! Página não encontrada.</h1>
            <p className="text-2xl">
              Tem certeza de que era isso que você estava procurando?
            </p>
            <p className="text-2xl">
              Aguarde uns instantes e recarregue a página, ou volte para a
              página inicial.
            </p>
            <div className="text-start m-14 p-8" onClick={() => navigate(-1)}>
              <DefaultButton>Voltar</DefaultButton>
            </div>
          </div>
        </div>
      </div>
      <div className="h-52"></div>
    </>
  );
}
