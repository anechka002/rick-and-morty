import { Header } from '../common/components/Header/Header';
import { Routing } from '../common/routing/Routing';

function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
