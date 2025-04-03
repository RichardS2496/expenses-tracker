import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Transactions } from "../Pages/Transactions";

export function InnerAppContent() {
  return (
    <main className="m-4 border-2 h-screen">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/transactions" Component={Transactions} />
      </Routes>
    </main>
  );
}
