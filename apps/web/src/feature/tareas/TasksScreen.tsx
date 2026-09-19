const priorities = [
  ['Poner lavavajillas en ciclo Eco', 'Antes de 21:00', 'Alex', 'Media'],
  [
    'Sacar reciclaje de cartón y vidrio',
    '20:00 h (Camión 20:30)',
    'María',
    'Urgente',
  ],
  ['Revisar seguro del hogar Mapfre', 'Vence en 2 días', 'Alex', 'Gestión'],
];
const maintenance = [
  ['Cambiar filtro aire HEPA salón', 'Sábado 26', 'En stock (Armario B)'],
  ['Limpieza campana extractora', 'Domingo 27', 'Ciclo cada 3 meses'],
  ['Cambio de sábanas suite', 'Viernes 25', 'Compartida'],
];
export function TasksScreen() {
  return (
    <main className="feature-main tasks-screen">
      <div className="feature-container">
        <div className="feature-kicker">
          ◉ ORGANIZACIÓN DOMÉSTICA{' '}
          <span className="sync-tag">Sincronizado</span>
        </div>
        <div className="feature-title-row">
          <div>
            <h1>Tareas del Hogar</h1>
          </div>
        </div>
        <div className="task-stats">
          <div>
            <b>8</b>
            <span>Pendientes</span>
          </div>
          <div className="stat-active">
            <b>3</b>
            <span>Para hoy</span>
          </div>
          <div>
            <b>1</b>
            <span>Completada</span>
          </div>
        </div>
        <div className="context-banner">
          <span className="ai-dot">✦</span>
          <div>
            <b>PAIO Context Engine ・</b>
            <p>
              PAIO ha repartido equilibradamente las labores de esta semana
              entre Alex y María para evitar sobrecargas y optimizar las horas
              de menor tarifa eléctrica.
            </p>
          </div>
        </div>
        <div className="tab-row">
          <span className="selected-tab">Hoy (3)</span>
          <span>Esta semana</span>
          <span>Mantenimiento</span>
        </div>
        <div className="people-row">
          <span className="selected-chip">♧ Todos</span>
          <span>
            ◉ Alex (Tú) <b>4</b>
          </span>
          <span>
            ♧ María <b>3</b>
          </span>
        </div>
        <section>
          <div className="task-section-title">
            <h2>◴ Prioritarias para hoy</h2>
            <span>3 acciones</span>
          </div>
          <div className="priority-list">
            {priorities.map(([title, when, person, level]) => (
              <article className="priority-card" key={title}>
                <div className="check-box" />
                <div className="priority-copy">
                  <h3>{title}</h3>
                  <p>
                    ◷ {when} · ◉ {person}
                  </p>
                  <small>
                    {level === 'Urgente' ? '♧' : '♧'} &nbsp;{' '}
                    {level === 'Media'
                      ? 'Valle de consumo: 22:30 h'
                      : level === 'Urgente'
                        ? '20:00 h (Camión 20:30)'
                        : 'Vence en 2 días'}
                  </small>
                </div>
                <span className={`priority-level ${level.toLowerCase()}`}>
                  {level}
                </span>
              </article>
            ))}
          </div>
        </section>
        <section>
          <div className="task-section-title">
            <h2>◷ Mantenimiento Periódico</h2>
            <span>Esta semana</span>
          </div>
          <div className="maintenance-list">
            {maintenance.map(([title, date, status]) => (
              <article key={title}>
                <span className="maintenance-icon">♧</span>
                <div>
                  <h3>{title}</h3>
                  <p>
                    {date} · <b>{status}</b>
                  </p>
                </div>
                <span>⋮</span>
              </article>
            ))}
          </div>
        </section>
        <div className="task-actions">
          <button>♩ Dictar a PAIO</button>
          <button>＋ Nueva tarea</button>
        </div>
        <div className="history-row">
          ▢ <i>“PAIO, recuérdame regar las plantas mañana a las ...”</i>
        </div>
        <div className="recent-title">
          <h2>Historial reciente</h2>
          <span>Últimas 24h</span>
        </div>
      </div>
    </main>
  );
}
