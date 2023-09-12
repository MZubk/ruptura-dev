import icon from "/public/favicon.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-zinc-800 p-4 font-mono text-zinc-200">
      <i>
        <img className="h-6" src={icon} alt="Logo do Ruptura Dev" />
      </i>
      <span className="ml-3">by MZubk</span>
    </footer>
  );
}
