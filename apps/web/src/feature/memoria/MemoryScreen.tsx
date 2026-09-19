const memoryGroups = [
  [
    '▦',
    'Estructura del Hogar',
    'Arquitectura física y contratos',
    [
      '3 dormitorios, 2 baños, 1 terraza orientación sur',
      'Mascota: Nico (Golden Retriever, 3 años)',
      'Contrato eléctrico con discriminación horaria',
    ],
  ],
  [
    '♜',
    'Preferencias Familiares',
    'Alimentación, compras y clima',
    [
      'Cenas vegetarianas los lunes y miércoles',
      'Compras semanales habituales los sábados a las 10:30',
      'Temperatura de descanso nocturno: 20°C a 21°C',
    ],
  ],
  [
    '▣',
    'Fechas Clave y Garantías',
    'Seguros, equipos y revisiones técnicas',
    [
      'Vencimiento seguro hogar Mapfre',
      'Garantía lavavajillas Bosch activa',
      'Próxima revisión oficial de caldera',
    ],
  ],
  [
    '♧',
    'Rutinas Deducidas por IA',
    'Hábitos reconocidos con autorización',
    [
      'Despertador progresivo y apertura de persianas a las 07:30',
      'Apagado automático de luces en salón tras 25 min vacío',
    ],
  ],
];
export function MemoryScreen() {
  return (
    <main className="feature-main memory-screen">
      <div className="feature-container">
        <p className="eyebrow">• BASE DE CONOCIMIENTO TRANSPARENTE</p>
        <div className="feature-title-row">
          <div>
            <h1>Memoria de PAIO</h1>
            <p>
              Todo lo que PAIO sabe sobre tu hogar, optimizado para asistirte
              con precisión milimétrica y privacidad absoluta.
            </p>
          </div>
          <span className="memory-badge">⌾</span>
        </div>
        <div className="sync-banner">
          ◉ &nbsp; Sincronizado localmente · Encriptación end-to-end
          <br />
          <b>• 24 recuerdos activos auditables</b>
        </div>
        <div className="search-field">
          ⌕ &nbsp; Buscar qué sabe PAIO de... <span>♩</span>
        </div>
        <div className="filter-row">
          <span className="selected-chip">Todos (24)</span>
          <span>Hogar Físico</span>
          <span>Preferencias</span>
          <span>Fechas</span>
        </div>
        <button className="memory-add">
          ＋{' '}
          <span>
            <b>Añadir recuerdo manualmente</b>
            <small>Enseña a PAIO un dato específico de tu casa</small>
          </span>
        </button>
        {memoryGroups.map(([icon, title, subtitle, items]) => (
          <section className="memory-group" key={String(title)}>
            <div className="memory-group-header">
              <span>{icon}</span>
              <div>
                <b>{title}</b>
                <small>{subtitle}</small>
              </div>
              <span className="memory-actions">⌕ &nbsp;▣</span>
            </div>
            {(items as string[]).map((item, index) => (
              <div className="memory-item" key={`${String(title)}-${index}`}>
                <span>✦</span>
                <div>
                  <b>{item}</b>
                  <small>
                    {title === 'Fechas Clave y Garantías'
                      ? 'Avisar con antelación y conservar historial'
                      : 'Mapeado automáticamente por sensores y hábitos'}
                  </small>
                </div>
              </div>
            ))}
          </section>
        ))}
        <section className="privacy-card">
          <b>♙ ¿Cómo aprende y retiene PAIO?</b>
          <p>
            PAIO jamás indexa información sin tu aprobación directa o sin
            deducirla de conversaciones expresas. Ningún dato viaja a servidores
            externos de terceros.
          </p>
        </section>
        <div className="memory-footer-actions">
          <button>⇩ Exportar JSON</button>
          <button>▧ Borrar memoria</button>
        </div>
      </div>
    </main>
  );
}
