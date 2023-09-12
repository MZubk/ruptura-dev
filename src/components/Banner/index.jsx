import logo from "/logo.svg";

export default function Banner() {
  return (
    <div className="py-12 px-20 pb-24 grid grid-cols-2 bg-zinc-500">
      <div className="col-span-1">
        <span className="text-2xl mb-4 leading-8">Bem-vindos ao</span>
        <h1 className="text-6xl mb-8">Ruptura Dev</h1>
        <p className="text-2xl mb-2 leading-8">
          Meu espaço pessoal onde estarei compartilhando conhecimento sobre
          programação.
        </p>
      </div>
      <div className="col-span-1 relative">
        <img
          className="absolute w-40 bottom-0 right-0 p-1 border-x-4 border-b-4 border-zinc-800 rounded-full shadow-lg shadow-emerald-300"
          src={logo}
          alt="Logo do Ruptura"
        />
      </div>
    </div>
  );
}
