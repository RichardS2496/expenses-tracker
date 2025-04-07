import { AddTransactionModalBtn } from "../components/AddTransactionBtn";
import { ChartViewComponent } from "../components/ChartViewComponent";
import { ExpenseViewComponent } from "../components/ExpenseViewComponent";
import { IncomeViewComponent } from "../components/IncomeViewComponent";
import { StatisticsViewComponent } from "../components/StatisticsViewComponent";
import { TotalBalanceComponent } from "../components/TotalBalanceComponent";
import "../styles/Home.css";

export function Home() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <AddTransactionModalBtn />
      </div>
      <section className="home-grid-inner-app">
        <TotalBalanceComponent />
        <IncomeViewComponent />
        <ExpenseViewComponent />
        <ChartViewComponent />
        <StatisticsViewComponent />
      </section>
    </div>
  );
}
