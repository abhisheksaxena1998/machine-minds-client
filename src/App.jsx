import "./App.css";
import NavBar from "./components/NavBar";
import TextAndVisualSearch from "./components/TextAndVisualSearch";
import Filters from "./components/Filters";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";

function App() {
  const [suggestedCategory, setSuggestedCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSuggestedCategories] = useState([
    "Top Deals",
    "Top Offers",
  ]);
  const [showFilters, setShowFilters] = useState(true);
  
  return (
    <Provider store={store}>
      <NavBar />
      <TextAndVisualSearch
        suggestedCategory={suggestedCategory}
        setSuggestedCategory={setSuggestedCategory}
      />
      {showFilters && (
        <>
          <div className="text-left ml-8 font-semibold -mb-7 mt-4">Filters</div>
          <Filters
            allCategories={allCategories}
            setSuggestedCategories={setSuggestedCategories}
          />
        </>
      )}
      <Products
        suggestedCategory={suggestedCategory}
        setAllCategories={setAllCategories}
        selectedCategories={selectedCategories}
        setSuggestedCategories={setSuggestedCategories}
        setShowFilters={setShowFilters}
      />
    </Provider>
  );
}

export default App;
