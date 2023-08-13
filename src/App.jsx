import "./App.css";
import NavBar from "./components/NavBar";
import TextAndVisualSearch from "./components/TextAndVisualSearch";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {

  
  return (
    <Provider store={store}>
      <NavBar />
      <TextAndVisualSearch />
      <Products />
    </Provider>
  );
}

export default App;
