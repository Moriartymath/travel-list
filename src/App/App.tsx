import "./App.css";
import { useEffect, useState } from "react";
import Logo from "./Logo/Logo.tsx";
import PackingList from "./PackingList/PackingList.tsx";
import Stats from "./Stats/Stats.tsx";
import Form from "./Form/Form.tsx";

function App() {
  const [items, setItems] = useState([
    { itemName: "socks", itemCount: 2, packed: false },
    { itemName: "laptop", itemCount: 1, packed: false },
  ]);

  return (
    <>
      <header className="header-info">
        <Logo />
        <Form setItems={setItems} />
      </header>
      <main className="main-info">
        <PackingList items={items} setItems={setItems} />
      </main>
      <footer className="footer-info">
        <Stats items={items} />
      </footer>
    </>
  );
}

export default App;
