import { Header } from "./Header";
import { InnerAppContent } from "./InnerAppContent";

export function FunctionalAppContent() {
  return (
    <div className="w-full">
      <Header />
      <InnerAppContent />
    </div>
  );
}
