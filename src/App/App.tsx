import { useState } from "react";
import Logo from "./Logo/Logo.tsx";
import PackingList from "./PackingList/PackingList.tsx";
import Stats from "./Stats/Stats.tsx";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <header className="header">
        <Logo />
      </header>
      <main className="main-info">
        <PackingList items={items} />
      </main>
      <footer className="footer-info">
        <Stats items={items} />
      </footer>
    </>
  );
}

export default App;
