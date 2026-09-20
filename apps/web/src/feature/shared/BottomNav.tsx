import { NavLink } from 'react-router';

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <div className="nav-items">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span>⌂</span>
          Home
        </NavLink>

        <NavLink
          to="/hogar"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span>⌘</span>
          Hogar
        </NavLink>

        <button className="orb-nav" aria-label="Asistente PAIO">
          <span>✦</span>
        </button>

        <NavLink
          to="/tareas"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span>▦</span>
          Tareas
        </NavLink>

        <NavLink
          to="/memoria"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span>◌</span>
          Memoria
        </NavLink>
      </div>
    </nav>
  );
}
