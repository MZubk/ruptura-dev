import error from "/404_error.svg";

export default function NotFound() {
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
            <div className="text-start mt-14">
              <button>Voltar</button>
            </div>
          </div>
          <div className="relative ">
            <img
              className="absolute w-52 -bottom-28 bg-zinc-500 right-52 p-1 border-x-4 border-b-4 border-orange-300 rounded-full shadow-lg shadow-orange-300"
              src={error}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
