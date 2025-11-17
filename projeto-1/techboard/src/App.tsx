import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvent } from "./components/CardEvent";
import { EventForm } from "./components/EventForm";
import { Header } from "./components/Header";
import { Theme } from "./components/Theme";

const themes = [
  {
    id: 1,
    name: "front-end",
  },
  {
    id: 2,
    name: "back-end",
  },
  {
    id: 3,
    name: "devops",
  },
  {
    id: 4,
    name: "inteligência artificial",
  },
  {
    id: 5,
    name: "data-science",
  },
  {
    id: 6,
    name: "cloud",
  },
];

const cards = [
  {
    img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
    theme: themes[0],
    data: new Date(),
    title: "Mulheres no Front",
  },
];

function App() {
  return (
    <main className="bg-[#06151A]">
      <Header></Header>
      <Banner></Banner>
      <EventForm></EventForm>
      {themes.map((item) => (
        <section key={item.id}>
          <Theme theme={item} />
          <CardEvent card={cards[0]} />
        </section>
      ))}

      {/* // <section>
      //   <Theme theme={themes[1]} />
      // </section>
      // <section>
      //   <Theme theme={themes[2]} />
      // </section>
      // <section>
      //   <Theme theme={themes[3]} />
      // </section>
      // <section>
      //   <Theme theme={themes[4]} />
      // </section>
      // <section>
      //   <Theme theme={themes[5]} />
      // </section> */}
    </main>
  );
}

export default App;
