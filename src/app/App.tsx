import { Header } from '../common/components/Header/Header';
import { Routing } from '../common/routing/Routing';
import { GlobalError } from '../common/components/GlobalError/GlobalError';

function App() {

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <Header />
      <Routing />
      <GlobalError />
    </div>
  );
}

export default App;
