import { SectionHeader } from '../shared/SectionHeader';
const tasks = [
  ['Poner lavavajillas', 'Ciclo eco'],
  ['Sacar reciclaje', '20:00 h'],
  ['Revisar seguro de vivienda', 'Vence hoy'],
];
export function HomeOverview() {
  return (
    <section className="overview-section">
      <SectionHeader
        icon="▣"
        title="Hoy en el hogar"
        trailing="Jueves, 24 Oct"
      />
      <div className="overview-grid">
        <article className="panel tasks-panel">
          <div className="panel-title">
            <span>◉ &nbsp;Tareas prioritarias (3)</span>
            <a>Gestionar</a>
          </div>
          <div className="task-list">
            {tasks.map(([task, detail]) => (
              <label className="task-row" key={task}>
                <span>
                  <input type="checkbox" />
                  {task}
                </span>
                <small className={detail === '20:00 h' ? 'amber' : ''}>
                  {detail}
                </small>
              </label>
            ))}
          </div>
        </article>
        <article className="panel">
          <div className="panel-title">
            <span>◷ &nbsp;Agenda</span>
            <span className="live-indicator" />
          </div>
          <div className="mini-item">
            <strong>Dentista Alex</strong>
            <small>17:30 · Clínica Norte</small>
          </div>
          <div className="mini-item">
            <strong>Filtro de aire HEPA</strong>
            <small className="amber">Llegada estimada 18:45</small>
          </div>
        </article>
        <article className="panel shopping-panel">
          <div className="panel-title">
            <span>⌂ &nbsp;Compra</span>
            <span className="count-badge">6 ítems</span>
          </div>
          <div className="dinner">
            <span>♨</span>
            <div>
              <small>CENA SUGERIDA</small>
              <strong>Pollo salteado &amp; verduras</strong>
            </div>
          </div>
          <button className="panel-action">＋ Añadir con PAIO</button>
        </article>
      </div>
    </section>
  );
}
