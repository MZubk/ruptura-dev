import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className="flex justify-center items-center h-14 gap-5 bg-gradient-to-b from-slate-400 from-60% to-zinc-500">
        <MenuLink to={"/"}>Inicio</MenuLink>
        <MenuLink to={"/sobre"}>Sobre</MenuLink>
      </nav>
    </header>
  );
}
