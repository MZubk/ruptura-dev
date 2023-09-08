import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className="flex justify-center items-center h-14 gap-5 bg-slate-400">
        <MenuLink to={"/"}>Inicio</MenuLink>
        <MenuLink to={"/sobre"}>Sobre</MenuLink>
      </nav>
    </header>
  );
}
