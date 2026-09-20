import { Link } from 'react-router';

export const NotFoundScreen = () => {
  return (
    <div className="not-found-screen">
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};
