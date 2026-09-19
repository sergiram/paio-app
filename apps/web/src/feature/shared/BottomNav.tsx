type Screen = 'home' | 'hogar' | 'tareas' | 'memoria';
type BottomNavProps = { active: Screen; onNavigate: (screen: Screen) => void };
const items: Array<[Screen, string, string]> = [
  ['home', '⌂', 'Home'],
  ['hogar', '⌘', 'Hogar'],
  ['tareas', '▦', 'Tareas'],
  ['memoria', '◌', 'Memoria'],
];
export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <div className="nav-items">
        {items.slice(0, 2).map(([screen, icon, label]) => (
          <button
            key={screen}
            className={active === screen ? 'active' : ''}
            onClick={() => onNavigate(screen)}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
        <button className="orb-nav" aria-label="Asistente PAIO">
          <span>✦</span>
        </button>
        {items.slice(2).map(([screen, icon, label]) => (
          <button
            key={screen}
            className={active === screen ? 'active' : ''}
            onClick={() => onNavigate(screen)}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
