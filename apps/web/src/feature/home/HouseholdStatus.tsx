import { SectionHeader } from '../shared/SectionHeader';
const rooms = [
  ['▰', 'Salón Principal', 'Luces apagadas · TV en reposo', '22.0°', ''],
  [
    '⌂',
    'Dormitorio Principal',
    'Ventana cerrada · Nivel de ruido óptimo',
    '21.0°',
    'cool',
  ],
  ['♨', 'Cocina', 'Campana apagada · Encimera despejada', '21.5°', 'warm'],
];
export function HouseholdStatus() {
  return (
    <section className="household-section">
      <SectionHeader icon="⌘" title="Estado del hogar" trailing="Ver mapa 3D" />
      <div className="room-list">
        {rooms.map(([icon, title, description, temperature, tone]) => (
          <article className="room-row" key={title}>
            <div className={`room-icon ${tone}`}>{icon}</div>
            <div className="room-copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="room-reading">
              <strong className={tone}>{temperature}</strong>
              <span className={`room-dot ${tone}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
