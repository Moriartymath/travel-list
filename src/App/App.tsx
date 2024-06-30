import "./App.css";
import { useEffect, useState } from "react";
import Logo from "./Logo/Logo.tsx";
import PackingList from "./PackingList/PackingList.tsx";
import Stats from "./Stats/Stats.tsx";
import Form from "./Form/Form.tsx";

function App() {
  const [items, setItems] = useState([
    { itemName: "socks", itemCount: 2, packed: true },
    { itemName: "laptop", itemCount: 1, packed: true },
  ]);

  return (
    <>
      <header className="header-info">
        <Logo />
        <Form />
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
