export function Header() {
  return (
    <header className="topbar">
      <div className="brand-mark" aria-label="PAIO">
        <span className="brand-orb">✦</span>
        <span>PAIO</span>
      </div>
      <div className="home-status">
        <span className="status-dot" /> Casa: Confort óptimo <b>• 21.5°</b>
      </div>
      <button className="profile-button" aria-label="Perfil de Alex">
        A
      </button>
    </header>
  );
}
