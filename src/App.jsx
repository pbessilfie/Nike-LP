import { useState } from "react";
import {
  Hero,
  Footer,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
} from "./Sections/index.js";
import Nav from "./Components/Nav";
import "./index.css";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main className="max-w-[100vw] bg:white dark:bg-black">
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <section className="xl:padding-l wide:paddng-b sm:padding-b  dark:bg-black">
        <Hero />
      </section>
      <section className="padding  dark:bg-black">
        <PopularProducts />
      </section>
      <section className="padding  dark:bg-black">
        <SuperQuality />
      </section>
      <section className="padding-x py-10  dark:bg-black">
        <Services />
      </section>
      <section className="padding  dark:bg-black">
        <SpecialOffer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </section>

      <section className="bg-pale-blue padding  dark:bg-black">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full  dark:bg-black">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8  border-slate-gray border-t-2">
        <Footer />
      </section>
    </main>
  );
};
export default App;
