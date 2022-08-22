import "./App.css";
import { Route } from "react-router-dom";

import Layout from "./components/layout/MainLayout/Layout";
import HomePage from "./pages/HomePage.js";
import BurgerPage from "./pages/BurgerPage";
import PizzaPage from "./pages/PizzaPage";

function App() {
  return (
    <div className="app">
      <Layout>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/burgers">
          <BurgerPage />
        </Route>

        <Route path="/pizza">
          <PizzaPage />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
