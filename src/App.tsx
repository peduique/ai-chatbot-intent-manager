import Header from "./components/Header";

import intents from "./data/intents.json";

const App = () => {
  console.log(intents);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
