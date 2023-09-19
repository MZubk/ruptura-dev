import icon from "/public/favicon.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-gradient-to-b from-blue-950 from-30% to-slate-900 p-4 font-mono text-slate-500">
      <i>
        <img className="h-6" src={icon} alt="Logo do Ruptura Dev" />
      </i>
      <span className="ml-3">by MZubk</span>
    </footer>
  );
}
