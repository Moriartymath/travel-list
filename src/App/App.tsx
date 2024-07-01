import "./App.css";
import { useState } from "react";
import Logo from "./Logo/Logo.tsx";
import PackingList from "./PackingList/PackingList.tsx";
import Stats from "./Stats/Stats.tsx";
import Form from "./Form/Form.tsx";
import SortItems from "./SortItems/SortItems.tsx";
import ClearList from "./ClearList/ClearList.tsx";

const sortMethods = {
  description: "description",
  inputOrder: "input",
  packedStatus: "packed",
};

function App() {
  const [items, setItems] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);

  return (
    <>
      <header className="header-info">
        <Logo />
        <Form setItems={setItems} />
      </header>
      <main className="main-info">
        <PackingList
          items={items}
          setItems={setItems}
          sortMethod={sortMethod}
        />
        <div className="items--settings">
          <SortItems setSortMethod={setSortMethod} sortMethods={sortMethods} />
          <ClearList setItems={setItems} />
        </div>
      </main>
      <footer className="footer-info">
        <Stats items={items} />
      </footer>
    </>
  );
}

export default App;
