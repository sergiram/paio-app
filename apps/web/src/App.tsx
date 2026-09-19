import { useState } from 'react';
import { BottomNav } from './feature/shared/BottomNav';
import { Header } from './feature/shared/Header';
import { HomeScreen } from './feature/home/HomeScreen';
import { MemoryScreen } from './feature/memoria/MemoryScreen';
import { TasksScreen } from './feature/tareas/TasksScreen';
import { HomeControlScreen } from './feature/hogar/HomeControlScreen';

type Screen = 'home' | 'hogar' | 'tareas' | 'memoria';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const page =
    screen === 'memoria' ? (
      <MemoryScreen />
    ) : screen === 'tareas' ? (
      <TasksScreen />
    ) : screen === 'hogar' ? (
      <HomeControlScreen />
    ) : (
      <HomeScreen />
    );
  return (
    <div className="app-shell">
      <Header />
      {page}
      <BottomNav active={screen} onNavigate={setScreen} />
    </div>
  );
}

export default App;
