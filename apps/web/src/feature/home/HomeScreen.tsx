import { HouseholdStatus } from './HouseholdStatus';
import { HomeOverview } from './HomeOverview';
import { ProactiveCard } from './ProactiveCard';
export function HomeScreen() {
  return (
    <main className="home-main">
      <div className="home-container">
        <section className="welcome-section">
          <div className="welcome-copy">
            <p className="eyebrow">Santuario doméstico</p>
            <h1>Buenas tardes, Alex</h1>
            <p className="welcome-subtitle">Tu hogar en un vistazo sereno</p>
          </div>
          <div className="sunset-icon">☼</div>
          <div className="environment-pill">
            <span>♨</span>
            <strong>21.2°C</strong>
            <i />
            <span>◌</span>
            <span>
              Aire: <b>Excelente</b>
            </span>
            <i />
            <span>♧</span>
            <span>3 en casa</span>
          </div>
        </section>
        <ProactiveCard />
        <HomeOverview />
        <HouseholdStatus />
      </div>
    </main>
  );
}
