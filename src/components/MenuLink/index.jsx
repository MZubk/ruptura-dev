import { NavLink } from "react-router-dom";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `link ${isActive ? "link_active" : ""}`}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
}
