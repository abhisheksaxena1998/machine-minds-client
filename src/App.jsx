import "./App.css";
import NavBar from "./components/NavBar";
import TextAndVisualSearch from "./components/TextAndVisualSearch";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";

function App() {
  const [suggestedCategory, setSuggestedCategory] = useState("");
  return (
    <Provider store={store}>
      <NavBar />
      <TextAndVisualSearch
        suggestedCategory={suggestedCategory}
        setSuggestedCategory={setSuggestedCategory}
      />
      <Products suggestedCategory={suggestedCategory} />
    </Provider>
  );
}

export default App;
