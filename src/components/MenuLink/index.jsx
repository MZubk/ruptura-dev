import { NavLink } from "react-router-dom";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `menu_text ${isActive ? "menu_text_active" : ""}`}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
}
