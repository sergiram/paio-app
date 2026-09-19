export function ProactiveCard() {
  return (
    <section className="proactive-card" aria-labelledby="suggestion-title">
      <div className="card-topline" />
      <div className="card-heading">
        <div className="heading-label">
          <span className="ai-dot">✦</span>
          <span id="suggestion-title">Sugerencia de PAIO</span>
        </div>
        <span className="time-badge">Ahora</span>
      </div>
      <div className="suggestion-content">
        <div className="suggestion-visual" aria-hidden="true">
          <span>🍲</span>
        </div>
        <p>
          Tienes pollo, arroz y verduras frescas en la nevera. ¿Quieres que
          prepare una receta para la cena y ajuste el temporizador del horno?
        </p>
      </div>
      <div className="reason">
        <span>⌁</span> Basado en caducidad de compras y preferencias de los
        jueves
      </div>
      <div className="action-row">
        <button className="button-secondary">Ahora no</button>
        <button className="button-primary">✦ &nbsp;Sugerir cena</button>
      </div>
    </section>
  );
}
