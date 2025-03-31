import "./App.css";
import { SidebarMenu } from "./components/SidebarMenu";
import { FunctionalAppContent } from "./components/FunctionalAppContent";

function App() {
  return (
    <div className="main-app-container w-full flex flex-row">
      <SidebarMenu />
      <FunctionalAppContent />
    </div>
  );
}

export default App;
