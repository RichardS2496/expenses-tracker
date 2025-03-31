import { Navbar } from "./Navbar";
import { LogoApp } from "./LogoApp";

import "../styles/SidebarMenu.css";
import { ToggleSidebar } from "./ToggleSidebar";

export function SidebarMenu() {
  return (
    <section className="sidebar">
      <div className="w-full h-screen flex flex-col gap-8 justify-between items-start py-6 px-2">
        <div className="w-full h-screen flex flex-col items-start justify-start box-border">
          <LogoApp />
          <ToggleSidebar />
          <Navbar />
        </div>
        <div className="w-full p-4">
          <button className="w-full justify-start cursor-pointer">
            Log out
          </button>
        </div>
      </div>
    </section>
  );
}
