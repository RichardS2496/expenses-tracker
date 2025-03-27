import "./App.css";
import { SidebarMenu } from "./components/SidebarMenu";

function App() {
  return (
    <div className="main-app-container flex flex-row">
      <SidebarMenu />
      <h2 className="text-xl font-bold">Hola</h2>
    </div>
  );
}

export default App;
