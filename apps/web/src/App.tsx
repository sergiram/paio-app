import { Outlet } from 'react-router';
import { BottomNav } from './feature/shared/BottomNav';
import { Header } from './feature/shared/Header';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
}

export default App;
