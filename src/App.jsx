import { About, Contact, Footer, Header, Hero, Work } from "./components";

function App() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black text-zinc-100 flex flex-col scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
