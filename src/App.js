import { Window } from "./components/Window";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <div className="content">
      <Header />
      <Sidebar />
      <Window />
    </div>
  );
}

export default App;
