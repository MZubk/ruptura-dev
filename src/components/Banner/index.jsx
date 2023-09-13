import logo from "/logo.svg";

export default function Banner() {
  return (
    <div className="py-12 px-20 pb-24 text-slate-950 grid grid-cols-2 bg-gradient-to-b from-slate-700 from-80% to-slate-900">
      <div className="col-span-1">
        <span className="text-2xl mb-4 leading-8">Bem-vindos ao</span>
        <h1 className="text-6xl mb-8 font-serif">Ruptura Dev</h1>
        <p className="text-2xl text-slate-400 mb-2 leading-8 font-thin">
          Meu espaço pessoal onde estarei compartilhando conhecimento sobre
          programação.
        </p>
      </div>
      <div className="col-span-1 relative">
        <img
          className="absolute w-40 bottom-0 right-0 p-1 border-x-4 border-b-4 bg-gradient-to-b from-slate-950 to-blue-700 border-blue-700 rounded-full shadow-md shadow-blue-700"
          src={logo}
          alt="Logo do Ruptura"
        />
      </div>
    </div>
  );
}
