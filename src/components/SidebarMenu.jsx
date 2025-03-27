import { Navbar } from "./Navbar";
import { LogoApp } from "./LogoApp";

import "../styles/SidebarMenu.css";
import { ToggleSidebar } from "./ToggleSidebar";

export function SidebarMenu() {
  return (
    <section className="sidebar">
      <div className="w-full flex flex-col gap-8 justify-between items-start">
        <div className="w-full flex flex-col items-start justify-start">
          <LogoApp />
          <ToggleSidebar />
          <Navbar />
        </div>
        <div className="mt-auto p-4">
          <button className="w-full justify-start">Log out</button>
        </div>
      </div>
    </section>
  );
}
