import "./App.css";
import { EventForm } from "./components/EventForm";
// No react, componentes são funções - blocos de código.

function App() {
  return (
    <main>
      <div className="bg-[#06151A] w-full justify-center-safe items-center flex py-3 select-none">
        <header>
          <img src="/logo.png" alt="project logo" />
        </header>
      </div>
      <section>
        <div className="bg-gradient-to-b from-[#17D9B1] to-[#06151A] justify-center-safe flex select-none sm:h-[700px]">
          <img src="/banner.png" alt="project banner" />
        </div>
      </section>
      <EventForm />
    </main>
  );
}

export default App;
