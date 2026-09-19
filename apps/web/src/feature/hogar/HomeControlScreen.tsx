const rooms = [
  {
    name: 'Salón Principal',
    meta: '3 Dispositivos vinculados',
    status: 'Confort Activo',
    items: [
      ['☼', 'Ambiente Noche', 'Intensidad: 60%'],
      ['❄', 'Climatización', 'Objetivo actual  22.0°'],
      ['▣', 'OLED 65” Studio', 'Cine  ◴'],
    ],
  },
  {
    name: 'Cocina',
    meta: 'Electrodomésticos conectados',
    status: 'En Operación',
    items: [
      ['♧', 'Lavavajillas Serie 8', 'Ciclo ECO · 32 min restantes'],
      ['▣', 'Frigorífico Inver­ter', 'Puerta cerrada · Modo ahorro 4.0°C'],
    ],
  },
  {
    name: 'Dormitorio Principal',
    meta: 'Calidad de descanso óptima',
    status: 'Reposo',
    items: [
      ['☾', 'Luz Cálida', '2700K Vela   20%'],
      ['≋', 'Aire Puro', 'CO2 420 ppm'],
    ],
  },
];
export function HomeControlScreen() {
  return (
    <main className="feature-main control-screen">
      <div className="feature-container">
        <div className="feature-kicker">
          DISPOSITIVOS Y CONFORT{' '}
          <span className="sync-tag">● Modo Confort Activo</span>
        </div>
        <h1>Tu Casa Conectada</h1>
        <p className="control-subtitle">
          Inteligencia ambiental adaptativa sincronizada con tu ritmo.
        </p>
        <div className="telemetry-row">
          <div>
            <span>ϟ Consumo</span>
            <b>1.4 kW</b>
          </div>
          <div>
            <span>♨ Temp Media</span>
            <b>21.4°C</b>
          </div>
          <div>
            <span>⌁ Dispositivos</span>
            <b>14 Activos</b>
          </div>
        </div>
        <div className="control-suggestion">
          <span className="ai-dot">✦</span>
          <div>
            <b>PAIO SUGIERE · Ahorro Térmico</b>
            <p>
              Bajar persianas del salón para retener temperatura antes de las
              19:00.
            </p>
            <button>✓ Aplicar</button>
            <button>Descartar</button>
          </div>
        </div>
        <div className="room-filter">
          <span>FILTRAR ESTANCIA</span>
          <b>6 Zonas</b>
        </div>
        <div className="filter-row">
          <span className="selected-chip">Todas (18)</span>
          <span>Salón</span>
          <span>Dormitorio Principal</span>
          <span>Cocina</span>
        </div>
        <div className="control-rooms">
          {rooms.map((room) => (
            <section className="control-room" key={room.name}>
              <div className="room-title">
                <div>
                  <h2>▣ {room.name}</h2>
                  <p>{room.meta}</p>
                </div>
                <span>{room.status}</span>
              </div>
              {room.items.map(([icon, title, detail]) => (
                <div className="device-item" key={title}>
                  <strong>{icon}</strong>
                  <div>
                    <b>{title}</b>
                    <small>{detail}</small>
                  </div>
                  {title === 'Ambiente Noche' ? (
                    <i className="toggle" />
                  ) : (
                    <em>{title.includes('Lavavajillas') ? '58%' : ''}</em>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
        <div className="scenes-title">
          <span>ESCENAS RÁPIDAS</span>
          <b>1-Tap</b>
        </div>
        <div className="scene-grid">
          <div>
            ☾ <b>Modo Noche</b>
            <small>Apagado todo y...</small>
          </div>
          <div>
            ⌂ <b>Salir de Casa</b>
            <small>Clima Eco + cerr...</small>
          </div>
          <div>
            ♨ <b>Cena Relajada</b>
            <small>Luz cálida y jazz</small>
          </div>
          <div>
            ❋ <b>Ventilación</b>
            <small>Renovación 10...</small>
          </div>
        </div>
        <div className="voice-prompt">
          <span>▥</span>
          <i>«PAIO, prepara el salón para ver una película»</i>
          <b>♩</b>
        </div>
      </div>
    </main>
  );
}
