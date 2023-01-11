import { useState } from "react";

import Header from "./components/Header";
import Intents from "./pages/Intents";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intents />
    </div>
  );
};

export default App;
